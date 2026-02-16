export const GAME_CONFIG = {
  // Dimensions (in pixels)
  EMOJI_CATCHER_SIZE: 70,
  EMOJI_TO_CATCH_SIZE: 40,

  // Game boundaries
  MIN_EMOJI_TO_CATCH_X: 5, // Minimum x position (percentage from left)
  MAX_EMOJI_TO_CATCH_X: 95, // Maximum x position (percentage from left)
  MIN_EMOJI_CATCHER_X: 5, // Minimum emoji catcher position to prevent cutoff
  MAX_EMOJI_CATCHER_X: 95, // Maximum emoji catcher position to prevent cutoff

  // Movement speeds
  EMOJI_CATCHER_MOVE_SPEED: 5, // Percentage per keypress
  BASE_EMOJI_TO_CATCH_SPEED: 0.15, // Base pixels per millisecond

  // Spawning
  INITIAL_SPAWN_INTERVAL: 1500, // milliseconds
  MIN_SPAWN_INTERVAL: 500, // milliseconds (fastest spawn rate)
  DIFFICULTY_INCREASE_RATE: 100, // ms decrease per difficulty level

  // Gameplay
  STARTING_LIVES: 3,
  MAX_LIVES: 5,
  DIFFICULTY_INCREASE_SCORE: 100, // Increase difficulty every 100 points

  // Collision detection
  COLLISION_BUFFER: 10, // Pixels of overlap required
  EMOJI_CATCHER_BOTTOM_OFFSET: 60, // Pixels from bottom of screen (increased for mobile Safari/in-app browsers)

  // Visual
  GAME_MAX_WIDTH: 800, // Maximum game container width
};
