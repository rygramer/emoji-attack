import styles from "./EmojiCatcher.module.css";
import { GAME_CONFIG } from "../../constants/gameConfig";

export default function EmojiCatcher({ position }) {
  return (
    <div
      className={styles.emojiCatcher}
      style={{
        left: `${position}%`,
        bottom: `${GAME_CONFIG.EMOJI_CATCHER_BOTTOM_OFFSET}px`,
        width: `${GAME_CONFIG.EMOJI_CATCHER_SIZE}px`,
        height: `${GAME_CONFIG.EMOJI_CATCHER_SIZE}px`,
      }}
    >
      <div className={styles.emojiCatcherEmoji}>👧🏼</div>
    </div>
  );
}
