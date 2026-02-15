import { useState, useEffect } from "react";
import styles from "./HolidayIndicator.module.css";

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
          {/* Catchable items */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>✅ CATCH</div>
            <div className={styles.itemsList}>
              {theme.catchable.map((item, index) => (
                <div key={index} className={styles.item}>
                  <span className={styles.itemEmoji}>{item.emoji}</span>
                  <span className={styles.itemPoints}>+{item.points}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Avoidable items */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>❌ AVOID</div>
            <div className={styles.itemsList}>
              {theme.avoidable.map((item, index) => (
                <div key={index} className={styles.item}>
                  <span className={styles.itemEmoji}>{item.emoji}</span>
                  <span className={styles.itemLives}>-1 ❤️</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
