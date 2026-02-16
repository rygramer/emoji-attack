import { THEMES } from "../../constants/themes";
import styles from "./MenuBackgrounds.module.css";

export default function MenuBackgrounds() {
  // Collect all unique emojis from all themes (both catchable and avoidable)
  const allEmojis = [];

  Object.keys(THEMES).forEach((themeKey) => {
    const theme = THEMES[themeKey];

    // Add catchable emojis
    theme.catchable.forEach((item) => {
      allEmojis.push(item.emoji);
    });

    // Add avoidable emojis
    theme.avoidable.forEach((item) => {
      allEmojis.push(item.emoji);
    });
  });

  // Shuffle and select a subset of emojis for performance (80 emojis)
  const shuffled = [...allEmojis].sort(() => Math.random() - 0.5);
  const selectedEmojis = shuffled.slice(0, 80);

  return (
    <div className={styles.menuBackgrounds}>
      {selectedEmojis.map((emoji, index) => (
        <div
          key={index}
          className={`${styles.floatingEmoji} ${styles[`emoji${index % 8}`]}`}
          style={{
            left: `${(index % 10) * 10 + Math.random() * 5}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${20 + Math.random() * 15}px`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}
