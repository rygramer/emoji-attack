export const GAME_CONFIG = {
  // Dimensions (in pixels)
  TEETH_SIZE: 70,
  FOOD_SIZE: 40,

  // Game boundaries
  MIN_FOOD_X: 5,      // Minimum x position (percentage from left)
  MAX_FOOD_X: 95,     // Maximum x position (percentage from left)
  MIN_TEETH_X: 5,     // Minimum teeth position to prevent cutoff
  MAX_TEETH_X: 95,    // Maximum teeth position to prevent cutoff

  // Movement speeds
  TEETH_MOVE_SPEED: 5,        // Percentage per keypress
  BASE_FOOD_SPEED: 0.15,      // Base pixels per millisecond

  // Spawning
  INITIAL_SPAWN_INTERVAL: 1500,   // milliseconds
  MIN_SPAWN_INTERVAL: 500,         // milliseconds (fastest spawn rate)
  DIFFICULTY_INCREASE_RATE: 100,   // ms decrease per difficulty level

  // Gameplay
  STARTING_LIVES: 3,
  MAX_LIVES: 5,
  DIFFICULTY_INCREASE_SCORE: 100,  // Increase difficulty every 100 points

  // Collision detection
  COLLISION_BUFFER: 10,      // Pixels of overlap required
  TEETH_BOTTOM_OFFSET: 20,   // Pixels from bottom of screen

  // Visual
  GAME_MAX_WIDTH: 800,       // Maximum game container width
};
