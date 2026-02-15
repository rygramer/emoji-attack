import styles from "./ThemeTransition.module.css";

export default function ThemeTransition({ theme, isVisible }) {
  if (!isVisible || !theme) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.emoji}>{theme.emoji}</div>
          <div className={styles.text}>{theme.name}!</div>
        </div>

        <div className={styles.itemsContainer}>
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
      </div>
    </div>
  );
}
