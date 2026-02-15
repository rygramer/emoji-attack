import styles from "./Score.module.css";

export default function Score({ score, lives, highScore }) {
  const hearts = "❤️".repeat(lives);

  return (
    <div className={styles.scoreContainer}>
      <div className={styles.scoreItem}>
        <span className={styles.label}>Score:</span>
        <span className={styles.value}>{score}</span>
      </div>

      <div className={styles.scoreItem}>
        <span className={styles.hearts}>{hearts || "💔"}</span>
      </div>

      <div className={styles.scoreItem}>
        <span className={styles.label}>High:</span>
        <span className={styles.value}>{highScore}</span>
      </div>
    </div>
  );
}
