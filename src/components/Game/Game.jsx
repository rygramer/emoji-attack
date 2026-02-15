import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Game.module.css';
import { useGameLoop } from './useGameLoop';
import { useHolidayTheme } from '../../hooks/useHolidayTheme';
import Teeth from '../Teeth/Teeth';
import FoodItem from '../FoodItem/FoodItem';
import Score from '../Score/Score';
import GameOver from '../GameOver/GameOver';
import ScorePopup from '../ScorePopup/ScorePopup';
import HolidayIndicator from '../HolidayIndicator/HolidayIndicator';
import ThemeTransition from '../ThemeTransition/ThemeTransition';
import ThemeDecorations from '../ThemeDecorations/ThemeDecorations';
import { checkCollision, isFoodNearTeeth } from '../../utils/collisionDetection';
import { shouldSpawnFood, createFood, calculateDifficulty } from '../../utils/foodSpawner';
import { GAME_CONFIG } from '../../constants/gameConfig';
import { HOLIDAY_THEMES, THEME_ORDER } from '../../constants/holidayThemes';

const STORAGE_KEY = 'emoji-attack-high-score';

export default function Game() {
  // Game state
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'paused', 'gameOver'
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(GAME_CONFIG.STARTING_LIVES);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [teethPosition, setTeethPosition] = useState(50); // percentage from left
  const [foods, setFoods] = useState([]);
  const [scorePopups, setScorePopups] = useState([]);
  const [showDebug, setShowDebug] = useState(false);

  // Holiday theme system
  const { currentThemeKey, currentTheme, isTransitioning, nextThemeKey, shouldPauseSpawning } = useHolidayTheme(gameState);

  // Refs for game loop
  const lastSpawnTimeRef = useRef(Date.now());
  const gameContainerRef = useRef(null);
  const collectedFoodsRef = useRef(new Set());
  const scoreRef = useRef(0);
  const livesRef = useRef(GAME_CONFIG.STARTING_LIVES);
  const previousThemeRef = useRef(currentThemeKey);

  // Start game
  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setLives(GAME_CONFIG.STARTING_LIVES);
    setTeethPosition(50);
    setFoods([]);
    scoreRef.current = 0;
    livesRef.current = GAME_CONFIG.STARTING_LIVES;
    lastSpawnTimeRef.current = Date.now();
    collectedFoodsRef.current.clear();
  }, []);

  // Restart game
  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  // Handle food caught
  const handleFoodCaught = useCallback((food) => {
    console.log('handleFoodCaught CALLED with food:', food.emoji, 'id:', food.id);

    // Prevent double-counting the same food
    if (collectedFoodsRef.current.has(food.id)) {
      console.log('DUPLICATE! Food already collected:', food.id);
      return;
    }
    collectedFoodsRef.current.add(food.id);

    console.log('Food caught!', food.type, food.emoji, 'Points:', food.points);

    // Create visual popup
    const popup = {
      id: `popup-${Date.now()}-${Math.random()}`,
      x: food.x,
      y: food.y,
      points: food.points,
      type: food.type,
    };
    setScorePopups((prev) => [...prev, popup]);

    // Handle healthy food - increase score
    if (food.type === 'healthy') {
      const oldScore = scoreRef.current;
      const newScore = oldScore + food.points;
      scoreRef.current = newScore;
      setScore(newScore);
      console.log('Score updated:', oldScore, '->', newScore);
    }

    // Handle unhealthy food - lose a life only (no score penalty)
    if (food.type === 'unhealthy') {
      const oldLives = livesRef.current;
      const newLives = oldLives - 1;
      livesRef.current = newLives;
      setLives(newLives);
      console.log('Lives decreased:', oldLives, '->', newLives);

      if (newLives <= 0) {
        setGameState('gameOver');
      }
    }

    // Remove the food
    setFoods((prev) => prev.filter((f) => f.id !== food.id));
  }, []);

  // Remove completed popups
  const handlePopupComplete = useCallback((popupId) => {
    setScorePopups((prev) => prev.filter((p) => p.id !== popupId));
  }, []);

  // Game loop callback
  const gameLoopCallback = useCallback(
    (deltaTime) => {
      if (!gameContainerRef.current) return;

      const gameWidth = gameContainerRef.current.offsetWidth;
      const gameHeight = gameContainerRef.current.offsetHeight;
      const difficulty = calculateDifficulty(score);

      // Debug: verify game loop is running
      if (showDebug) {
        console.log('Game loop running - deltaTime:', deltaTime, 'foods count:', foods.length);
      }

      // Update food positions and check collisions
      // Speed multiplier increases with difficulty (1.0 at start, +0.1 per difficulty level)
      const speedMultiplier = 1 + (difficulty * 0.3);

      setFoods((prevFoods) => {
        const updatedFoods = prevFoods
          .map((food) => ({
            ...food,
            y: food.y + GAME_CONFIG.BASE_FOOD_SPEED * food.speed * speedMultiplier * deltaTime,
          }))
          .filter((food) => {
            // Remove foods that are off-screen
            if (food.y > gameHeight + GAME_CONFIG.FOOD_SIZE) {
              return false;
            }

            // Check collision - always check, not just when near teeth
            if (checkCollision({ position: teethPosition }, food, gameWidth, gameHeight)) {
              console.log('COLLISION! Catching food:', food.emoji);
              try {
                handleFoodCaught(food);
              } catch (error) {
                console.error('ERROR in handleFoodCaught:', error);
              }
              return false;
            }

            return true;
          });

        return updatedFoods;
      });

      // Spawn new food (but not during theme transitions)
      if (!shouldPauseSpawning && shouldSpawnFood(lastSpawnTimeRef.current, difficulty)) {
        const newFood = createFood(currentThemeKey, difficulty);
        console.log('New food spawned:', newFood.emoji, 'at x:', newFood.x, 'type:', newFood.type, 'difficulty:', difficulty);
        setFoods((prev) => [...prev, newFood]);
        lastSpawnTimeRef.current = Date.now();
      }

      // Debug: log food count
      if (showDebug) {
        console.log('Active foods:', foods.length, 'Teeth pos:', teethPosition);
      }
    },
    [score, teethPosition, handleFoodCaught, showDebug, shouldPauseSpawning, currentThemeKey]
  );

  // Game loop
  useGameLoop(gameLoopCallback, gameState === 'playing');

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState === 'menu') {
        startGame();
        return;
      }

      if (gameState !== 'playing' && gameState !== 'paused') return;

      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          setTeethPosition((prev) => Math.max(GAME_CONFIG.MIN_TEETH_X, prev - GAME_CONFIG.TEETH_MOVE_SPEED));
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          setTeethPosition((prev) => Math.min(GAME_CONFIG.MAX_TEETH_X, prev + GAME_CONFIG.TEETH_MOVE_SPEED));
          break;
        case ' ':
          e.preventDefault();
          setGameState((prev) => (prev === 'playing' ? 'paused' : 'playing'));
          break;
        case 'b':
        case 'B':
          e.preventDefault();
          setShowDebug((prev) => !prev);
          console.log('Debug mode toggled');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, startGame]);

  // Touch/Mouse controls for mobile
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (gameState !== 'playing' || !gameContainerRef.current) return;

      const rect = gameContainerRef.current.getBoundingClientRect();
      let clientX;

      if (e.touches) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }

      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setTeethPosition(Math.max(GAME_CONFIG.MIN_TEETH_X, Math.min(GAME_CONFIG.MAX_TEETH_X, percentage)));
    };

    const container = gameContainerRef.current;
    if (container) {
      container.addEventListener('touchmove', handlePointerMove, { passive: false });
      container.addEventListener('mousemove', handlePointerMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('touchmove', handlePointerMove);
        container.removeEventListener('mousemove', handlePointerMove);
      }
    };
  }, [gameState]);

  // Clear foods when theme changes during gameplay
  useEffect(() => {
    if (gameState === 'playing' && previousThemeRef.current !== currentThemeKey) {
      console.log('Theme changed from', previousThemeRef.current, 'to', currentThemeKey, '- clearing old food items');
      setFoods([]);
      previousThemeRef.current = currentThemeKey;
    }
  }, [currentThemeKey, gameState]);

  // Update high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem(STORAGE_KEY, score.toString());
    }
  }, [score, highScore]);

  return (
    <div
      className={styles.gameContainer}
      ref={gameContainerRef}
      style={{ background: currentTheme?.background }}
    >
      {/* Score display */}
      {gameState !== 'menu' && <Score score={score} lives={lives} highScore={highScore} />}

      {/* Holiday theme UI */}
      {gameState === 'playing' && (
        <>
          <HolidayIndicator theme={currentTheme} isTransitioning={isTransitioning} />
          <ThemeDecorations themeKey={currentThemeKey} />
        </>
      )}
      <ThemeTransition key={currentThemeKey} theme={currentTheme} isVisible={isTransitioning} />

      {/* Menu screen */}
      {gameState === 'menu' && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            <h1 className={styles.gameTitle}>👧🏼 Matilda's Emoji Attack 👧🏼</h1>
            <p className={styles.gameDescription}>
              Help Matilda catch the right emojis as the theme changes!
            </p>
            <div className={styles.holidayShowcase}>
              {THEME_ORDER.map((themeKey) => {
                const theme = HOLIDAY_THEMES[themeKey];
                return (
                  <div key={themeKey} className={styles.holidayItem}>
                    <span className={styles.holidayEmoji}>{theme.emoji}</span>
                    <span className={styles.holidayName}>{theme.name}</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.instructions}>
              <p>🎮 Themes change automatically during gameplay!</p>
              <p>✅ Catch the right items for points</p>
              <p>❌ Avoid the wrong items to keep your lives</p>
            </div>
            <button className={styles.startButton} onClick={startGame}>
              Start Game
            </button>
            <p className={styles.controls}>
              Use Arrow Keys or A/D to move • Space to pause
            </p>
          </div>
        </div>
      )}

      {/* Paused screen */}
      {gameState === 'paused' && (
        <div className={styles.pausedOverlay}>
          <h2 className={styles.pausedText}>⏸️ Paused</h2>
          <p className={styles.pausedHint}>Press Space to continue</p>
        </div>
      )}

      {/* Game elements */}
      {gameState !== 'menu' && (
        <>
          <Teeth position={teethPosition} />
          {foods.map((food) => (
            <FoodItem key={food.id} food={food} />
          ))}
          {scorePopups.map((popup) => (
            <ScorePopup
              key={popup.id}
              id={popup.id}
              x={popup.x}
              y={popup.y}
              points={popup.points}
              type={popup.type}
              onComplete={handlePopupComplete}
            />
          ))}
        </>
      )}

      {/* Game Over screen */}
      {gameState === 'gameOver' && (
        <GameOver finalScore={score} highScore={highScore} onRestart={restartGame} />
      )}
    </div>
  );
}
