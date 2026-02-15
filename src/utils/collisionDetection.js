import { GAME_CONFIG } from '../constants/gameConfig';

/**
 * AABB (Axis-Aligned Bounding Box) collision detection
 * Checks if two rectangles overlap
 */
export function checkCollision(teeth, food, gameWidth, gameHeight) {
  // Convert teeth position (percentage) to pixels
  // Account for transform: translateX(-50%) which centers the teeth
  const teethCenterX = (teeth.position / 100) * gameWidth;
  const teethX = teethCenterX - GAME_CONFIG.TEETH_SIZE / 2;
  const teethY = gameHeight - GAME_CONFIG.TEETH_SIZE - GAME_CONFIG.TEETH_BOTTOM_OFFSET;

  // Create bounding boxes
  const teethBox = {
    x: teethX,
    y: teethY,
    width: GAME_CONFIG.TEETH_SIZE,
    height: GAME_CONFIG.TEETH_SIZE,
  };

  const foodBox = {
    x: (food.x / 100) * gameWidth - GAME_CONFIG.FOOD_SIZE / 2,
    y: food.y,
    width: GAME_CONFIG.FOOD_SIZE,
    height: GAME_CONFIG.FOOD_SIZE,
  };

  // AABB collision check - simple overlap test
  return (
    teethBox.x < foodBox.x + foodBox.width &&
    teethBox.x + teethBox.width > foodBox.x &&
    teethBox.y < foodBox.y + foodBox.height &&
    teethBox.y + teethBox.height > foodBox.y
  );
}

/**
 * Check if food is near the teeth (optimization to reduce collision checks)
 */
export function isFoodNearTeeth(food, gameHeight) {
  const distanceFromBottom = gameHeight - food.y;
  return distanceFromBottom < 150; // Only check when within 150px of bottom
}
