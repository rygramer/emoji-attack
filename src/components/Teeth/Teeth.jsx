import styles from './Teeth.module.css';
import { GAME_CONFIG } from '../../constants/gameConfig';

export default function Teeth({ position }) {
  return (
    <div
      className={styles.teeth}
      style={{
        left: `${position}%`,
        bottom: `${GAME_CONFIG.TEETH_BOTTOM_OFFSET}px`,
        width: `${GAME_CONFIG.TEETH_SIZE}px`,
        height: `${GAME_CONFIG.TEETH_SIZE}px`,
      }}
    >
      <div className={styles.teethEmoji}>👧🏼</div>
    </div>
  );
}
