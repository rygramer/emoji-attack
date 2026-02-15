import { useEffect, useState } from 'react';
import styles from './ScorePopup.module.css';

export default function ScorePopup({ x, y, points, type, id, onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(id);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id, onComplete]);

  const isPositive = type === 'healthy';
  const displayText = isPositive ? `+${points}` : '-1 ❤️';

  return (
    <div
      className={`${styles.popup} ${isPositive ? styles.positive : styles.negative}`}
      style={{
        left: `${x}%`,
        top: `${y}px`,
      }}
    >
      <div className={styles.points}>
        {displayText}
      </div>
      <div className={styles.burst}>
        {isPositive ? '✨' : '💥'}
      </div>
    </div>
  );
}
