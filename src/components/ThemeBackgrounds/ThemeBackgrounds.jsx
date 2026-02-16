import { THEMES } from "../../constants/themes";
import styles from "./ThemeBackgrounds.module.css";

export default function ThemeBackgrounds({ themeKey }) {
  const theme = THEMES[themeKey];
  if (!theme || !theme.backgrounds) return null;

  const { items, className } = theme.backgrounds;

  return (
    <div className={styles.backgrounds}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.background} ${styles[className]} ${styles[`item${index}`]}`}
          style={{
            left: `${(index / items.length) * 100}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
