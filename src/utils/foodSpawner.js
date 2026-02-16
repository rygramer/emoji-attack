import { GAME_CONFIG } from "../constants/gameConfig";
import { HOLIDAY_THEMES } from "../constants/holidayThemes";

/**
 * Check if it's time to spawn a new food item
 */
export function shouldSpawnFood(lastSpawnTime, difficulty) {
  const now = Date.now();
  const spawnInterval = Math.max(
    GAME_CONFIG.MIN_SPAWN_INTERVAL,
    GAME_CONFIG.INITIAL_SPAWN_INTERVAL -
      difficulty * GAME_CONFIG.DIFFICULTY_INCREASE_RATE,
  );
  return now - lastSpawnTime > spawnInterval;
}

/**
 * Create a new food item with random properties
 * @param {string} holidayTheme - The current holiday theme key (e.g., 'halloween', 'thanksgiving')
 * @param {number} difficulty - Current difficulty level (affects avoidable item probability)
 */
export function createFood(holidayTheme, difficulty = 0) {
  let foodType;

  if (holidayTheme) {
    // Use holiday theme foods
    const theme = HOLIDAY_THEMES[holidayTheme];

    // Adjust probability of avoidable items based on difficulty
    // Start at 40% avoidable, increase by 5% per difficulty level, cap at 70%
    const avoidableProbability = Math.min(0.4 + difficulty * 0.05, 0.7);

    // Decide if this should be an avoidable item
    const isAvoidable = Math.random() < avoidableProbability;

    if (isAvoidable) {
      // Select from avoidable items
      const avoidableItems = theme.avoidable.map((item) => ({
        ...item,
        type: "unhealthy",
      }));
      foodType =
        avoidableItems[Math.floor(Math.random() * avoidableItems.length)];
    } else {
      // Select from catchable items
      const catchableItems = theme.catchable.map((item) => ({
        ...item,
        type: "healthy",
      }));
      foodType =
        catchableItems[Math.floor(Math.random() * catchableItems.length)];
    }
  }

  return {
    id: `${Date.now()}-${Math.random()}`,
    ...foodType,
    x:
      Math.random() * (GAME_CONFIG.MAX_FOOD_X - GAME_CONFIG.MIN_FOOD_X) +
      GAME_CONFIG.MIN_FOOD_X,
    y: -GAME_CONFIG.FOOD_SIZE, // Start above the screen
  };
}

/**
 * Calculate current difficulty level based on score
 */
export function calculateDifficulty(score) {
  return Math.floor(score / GAME_CONFIG.DIFFICULTY_INCREASE_SCORE);
}
