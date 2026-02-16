import { useMemo } from "react";
import { THEMES } from "../../constants/themes";
import styles from "./AnimatedBackgrounds.module.css";

export default function AnimatedBackgrounds({ themeKey }) {
  let items = [];

  if (themeKey) {
    // Theme-specific mode: show background items for this theme (quadrupled)
    const theme = THEMES[themeKey];
    if (theme?.backgrounds?.items) {
      // Quadruple the items for more visual density
      items = [
        ...theme.backgrounds.items,
        ...theme.backgrounds.items,
        ...theme.backgrounds.items,
        ...theme.backgrounds.items,
      ];
    }
  } else {
    // Menu mode: collect all unique emojis from all themes
    const allEmojis = [];

    Object.keys(THEMES).forEach((key) => {
      const theme = THEMES[key];

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
    items = shuffled.slice(0, 80);
  }

  if (items.length === 0) return null;

  // Generate stable random positions for themed backgrounds
  const randomPositions = useMemo(
    () => items.map(() => Math.random() * 100),
    [items.length, themeKey]
  );

  return (
    <div className={styles.backgrounds}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.background} ${styles[`animation${index % 8}`]}`}
          style={{
            left: themeKey
              ? `${randomPositions[index]}%`
              : `${(index % 10) * 10 + Math.random() * 5}%`,
            animationDelay: themeKey
              ? `${index * 0.5}s`
              : `${Math.random() * 5}s`,
            fontSize: themeKey ? "20px" : `${20 + Math.random() * 15}px`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
