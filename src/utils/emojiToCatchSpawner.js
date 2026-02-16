import { GAME_CONFIG } from "../constants/gameConfig";
import { THEMES } from "../constants/themes";

/**
 * Check if it's time to spawn a new emoji to catch
 */
export function shouldSpawnEmojiToCatch(lastSpawnTime, difficulty) {
  const now = Date.now();
  const spawnInterval = Math.max(
    GAME_CONFIG.MIN_SPAWN_INTERVAL,
    GAME_CONFIG.INITIAL_SPAWN_INTERVAL -
      difficulty * GAME_CONFIG.DIFFICULTY_INCREASE_RATE,
  );
  return now - lastSpawnTime > spawnInterval;
}

/**
 * Create a new emoji to catch with random properties
 * @param {string} themeKey - The current theme key (e.g., 'halloween', 'thanksgiving')
 * @param {number} difficulty - Current difficulty level (affects avoidable item probability)
 */
export function createEmojiToCatch(themeKey, difficulty = 0) {
  let emojiToCatchType;

  if (themeKey) {
    // Use theme emojis to catch
    const theme = THEMES[themeKey];

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
      emojiToCatchType =
        avoidableItems[Math.floor(Math.random() * avoidableItems.length)];
    } else {
      // Select from catchable items
      const catchableItems = theme.catchable.map((item) => ({
        ...item,
        type: "healthy",
      }));
      emojiToCatchType =
        catchableItems[Math.floor(Math.random() * catchableItems.length)];
    }
  }

  return {
    id: `${Date.now()}-${Math.random()}`,
    ...emojiToCatchType,
    x:
      Math.random() * (GAME_CONFIG.MAX_EMOJI_TO_CATCH_X - GAME_CONFIG.MIN_EMOJI_TO_CATCH_X) +
      GAME_CONFIG.MIN_EMOJI_TO_CATCH_X,
    y: -GAME_CONFIG.EMOJI_TO_CATCH_SIZE, // Start above the screen
  };
}

/**
 * Calculate current difficulty level based on score
 */
export function calculateDifficulty(score) {
  return Math.floor(score / GAME_CONFIG.DIFFICULTY_INCREASE_SCORE);
}
