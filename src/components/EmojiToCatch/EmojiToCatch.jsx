import styles from "./EmojiToCatch.module.css";
import { GAME_CONFIG } from "../../constants/gameConfig";

export default function EmojiToCatch({ emojiToCatch }) {
  return (
    <div
      className={`${styles.emojiToCatch} ${styles[emojiToCatch.type]}`}
      style={{
        left: `${emojiToCatch.x}%`,
        top: `${emojiToCatch.y}px`,
        fontSize: `${GAME_CONFIG.EMOJI_TO_CATCH_SIZE}px`,
      }}
    >
      {emojiToCatch.emoji}
    </div>
  );
}
