import { GAME_CONFIG } from "../constants/gameConfig";

/**
 * AABB (Axis-Aligned Bounding Box) collision detection
 * Checks if two rectangles overlap
 */
export function checkCollision(emojiCatcher, emojiToCatch, gameWidth, gameHeight) {
  // Convert emoji catcher position (percentage) to pixels
  // Account for transform: translateX(-50%) which centers the emoji catcher
  const emojiCatcherCenterX = (emojiCatcher.position / 100) * gameWidth;
  const emojiCatcherX = emojiCatcherCenterX - GAME_CONFIG.EMOJI_CATCHER_SIZE / 2;
  const emojiCatcherY =
    gameHeight - GAME_CONFIG.EMOJI_CATCHER_SIZE - GAME_CONFIG.EMOJI_CATCHER_BOTTOM_OFFSET;

  // Create bounding boxes
  const emojiCatcherBox = {
    x: emojiCatcherX,
    y: emojiCatcherY,
    width: GAME_CONFIG.EMOJI_CATCHER_SIZE,
    height: GAME_CONFIG.EMOJI_CATCHER_SIZE,
  };

  const emojiToCatchBox = {
    x: (emojiToCatch.x / 100) * gameWidth - GAME_CONFIG.EMOJI_TO_CATCH_SIZE / 2,
    y: emojiToCatch.y,
    width: GAME_CONFIG.EMOJI_TO_CATCH_SIZE,
    height: GAME_CONFIG.EMOJI_TO_CATCH_SIZE,
  };

  // AABB collision check - simple overlap test
  return (
    emojiCatcherBox.x < emojiToCatchBox.x + emojiToCatchBox.width &&
    emojiCatcherBox.x + emojiCatcherBox.width > emojiToCatchBox.x &&
    emojiCatcherBox.y < emojiToCatchBox.y + emojiToCatchBox.height &&
    emojiCatcherBox.y + emojiCatcherBox.height > emojiToCatchBox.y
  );
}
