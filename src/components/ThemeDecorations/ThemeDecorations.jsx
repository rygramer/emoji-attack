import { HOLIDAY_THEMES } from "../../constants/holidayThemes";
import styles from "./ThemeDecorations.module.css";

export default function ThemeDecorations({ themeKey }) {
  const theme = HOLIDAY_THEMES[themeKey];
  if (!theme || !theme.decorations) return null;

  const { items, className } = theme.decorations;

  return (
    <div className={styles.decorations}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.decoration} ${styles[className]} ${styles[`item${index}`]}`}
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
