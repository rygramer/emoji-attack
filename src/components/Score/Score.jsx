import { useEffect } from 'react';
import styles from './Score.module.css';
import { GAME_CONFIG } from '../../constants/gameConfig';

export default function Score({ score, lives, highScore }) {
  const hearts = '❤️'.repeat(lives);

  useEffect(() => {
    console.log('Score component rendered - Score:', score, 'Lives:', lives, 'High:', highScore);
  }, [score, lives, highScore]);

  return (
    <div className={styles.scoreContainer}>
      <div className={styles.scoreItem}>
        <span className={styles.label}>Score:</span>
        <span className={styles.value}>{score}</span>
      </div>

      <div className={styles.scoreItem}>
        <span className={styles.hearts}>{hearts || '💔'}</span>
      </div>

      <div className={styles.scoreItem}>
        <span className={styles.label}>High:</span>
        <span className={styles.value}>{highScore}</span>
      </div>
    </div>
  );
}
