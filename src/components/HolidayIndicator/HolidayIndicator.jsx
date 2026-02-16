import { useState, useEffect } from "react";
import styles from "./HolidayIndicator.module.css";
import ThemeItems from "../ThemeItems/ThemeItems";

export default function HolidayIndicator({ theme, isTransitioning }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Mark as animated in after first render
  useEffect(() => {
    setHasAnimatedIn(true);
  }, []);

  if (!theme) return null;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.indicator} ${!hasAnimatedIn ? styles.slideIn : ""} ${isTransitioning ? styles.transitioning : ""}`}
    >
      <div className={styles.header} onClick={toggleExpanded}>
        <div className={styles.themeTitle}>
          <span className={styles.themeEmoji}>{theme.emoji}</span>
          <span className={styles.themeName}>{theme.name}</span>
        </div>
        <button
          className={styles.toggleButton}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? "▼" : "▶"}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.content}>
          <ThemeItems theme={theme} variant="default" />
        </div>
      )}
    </div>
  );
}
