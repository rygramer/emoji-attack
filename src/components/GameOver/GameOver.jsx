import styles from "./GameOver.module.css";

export default function GameOver({ finalScore, highScore, onRestart }) {
  const isNewHighScore = finalScore >= highScore && finalScore > 0;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Game Over!</h1>

        {isNewHighScore && (
          <div className={styles.newHighScore}>🎉 New High Score! 🎉</div>
        )}

        <div className={styles.scores}>
          <div className={styles.scoreRow}>
            <span className={styles.scoreLabel}>Your Score:</span>
            <span className={styles.scoreValue}>{finalScore}</span>
          </div>
          <div className={styles.scoreRow}>
            <span className={styles.scoreLabel}>High Score:</span>
            <span className={styles.scoreValue}>{highScore}</span>
          </div>
        </div>

        <button className={styles.restartButton} onClick={onRestart}>
          Play Again
        </button>

      </div>
    </div>
  );
}
