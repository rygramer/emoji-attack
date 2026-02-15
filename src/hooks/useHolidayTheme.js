import { useState, useEffect, useRef, useCallback } from 'react';
import { HOLIDAY_THEMES, THEME_ORDER } from '../constants/holidayThemes';

/**
 * Custom hook for managing holiday theme state and transitions
 * Automatically switches themes at random intervals during gameplay
 */
// Shuffle array helper
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useHolidayTheme(gameState) {
  // Initialize with random theme from shuffled queue
  const [initialQueue] = useState(() => shuffleArray(THEME_ORDER));
  const [currentThemeKey, setCurrentThemeKey] = useState(initialQueue[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldPauseSpawning, setShouldPauseSpawning] = useState(false);
  const themeTimerRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const spawnPauseTimerRef = useRef(null);
  const themeQueueRef = useRef(initialQueue);
  const queueIndexRef = useRef(1); // Start at 1 since we used index 0 for initial theme

  // Get current theme data
  const currentTheme = HOLIDAY_THEMES[currentThemeKey];

  // Get next theme from shuffled queue
  const getNextTheme = useCallback(() => {
    // If we've gone through all themes, reshuffle
    if (queueIndexRef.current >= themeQueueRef.current.length) {
      themeQueueRef.current = shuffleArray(THEME_ORDER);
      queueIndexRef.current = 0;
      console.log('Reshuffled theme queue:', themeQueueRef.current);
    }

    // Get next theme from queue
    const nextTheme = themeQueueRef.current[queueIndexRef.current];
    queueIndexRef.current++;

    return nextTheme;
  }, []);

  // Schedule next theme change
  const scheduleThemeChange = useCallback(() => {
    if (gameState !== 'playing') return;

    // Clear existing timer
    if (themeTimerRef.current) {
      clearTimeout(themeTimerRef.current);
    }

    // Get random duration within theme's range
    const [min, max] = currentTheme.durationRange;
    const duration = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(`Next theme change in ${duration / 1000} seconds`);

    themeTimerRef.current = setTimeout(() => {
      changeTheme();
    }, duration);
  }, [currentTheme, gameState]);

  // Handle theme transition
  const changeTheme = useCallback(() => {
    // Get next theme immediately
    const nextTheme = getNextTheme();

    // Switch to new theme first
    setCurrentThemeKey(nextTheme);
    console.log('Theme changed to:', nextTheme);

    // Show transition overlay and pause spawning
    setIsTransitioning(true);
    setShouldPauseSpawning(true);

    // After 1 second, resume spawning (while overlay is still visible)
    spawnPauseTimerRef.current = setTimeout(() => {
      setShouldPauseSpawning(false);
      console.log('Resuming food spawning while overlay is visible');
    }, 1000);

    // After 5 seconds, hide overlay
    transitionTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
      scheduleThemeChange();
    }, 5000);
  }, [getNextTheme, scheduleThemeChange]);

  // Start theme timer when game starts (only on game state change)
  useEffect(() => {
    if (gameState === 'playing' && !themeTimerRef.current && !isTransitioning) {
      // Only schedule if no timer is running and not transitioning
      scheduleThemeChange();
    } else if (gameState !== 'playing') {
      // Clear all timers when not playing
      if (themeTimerRef.current) {
        clearTimeout(themeTimerRef.current);
        themeTimerRef.current = null;
      }
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
      if (spawnPauseTimerRef.current) {
        clearTimeout(spawnPauseTimerRef.current);
        spawnPauseTimerRef.current = null;
      }
    }

    return () => {
      if (themeTimerRef.current) clearTimeout(themeTimerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (spawnPauseTimerRef.current) clearTimeout(spawnPauseTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]); // Only depend on gameState to avoid rescheduling on theme changes

  // Reset to random theme when game restarts
  useEffect(() => {
    if (gameState === 'menu') {
      setIsTransitioning(false);
      setShouldPauseSpawning(false);
      // Reset queue with new shuffle and start with first theme
      const newQueue = shuffleArray(THEME_ORDER);
      themeQueueRef.current = newQueue;
      setCurrentThemeKey(newQueue[0]);
      queueIndexRef.current = 1; // Start at 1 since we used index 0 for theme
    }
  }, [gameState]);

  return {
    currentThemeKey,
    currentTheme,
    isTransitioning,
    nextThemeKey: getNextTheme(),
    shouldPauseSpawning // Separate state for spawn control
  };
}
