import styles from "./ThemeTransition.module.css";
import ThemeItems from "../ThemeItems/ThemeItems";

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
          <ThemeItems theme={theme} variant="overlay" />
        </div>
      </div>
    </div>
  );
}
