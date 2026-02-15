import { useEffect, useRef } from "react";

/**
 * Custom hook for game loop using requestAnimationFrame
 * Provides smooth 60fps updates with delta time
 *
 * @param {Function} callback - Function to call each frame with deltaTime
 * @param {boolean} isRunning - Whether the game loop should be running
 */
export function useGameLoop(callback, isRunning) {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    if (!isRunning) {
      // Reset time reference when stopping
      previousTimeRef.current = undefined;
      return;
    }

    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;

        // Cap delta time to prevent huge jumps (e.g., when tab becomes active again)
        const cappedDeltaTime = Math.min(deltaTime, 100);

        callback(cappedDeltaTime);
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isRunning, callback]);
}
