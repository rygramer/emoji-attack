import styles from "./ThemeItems.module.css";

export default function ThemeItems({ theme, variant = "default" }) {
  if (!theme) return null;

  const isOverlay = variant === "overlay";

  return (
    <>
      {/* Catchable items */}
      <div
        className={`${styles.section} ${isOverlay ? styles.overlaySection : ""}`}
      >
        <div
          className={`${styles.sectionTitle} ${isOverlay ? styles.overlay : ""}`}
        >
          ✅ CATCH
        </div>
        <div
          className={`${styles.itemsList} ${isOverlay ? styles.overlayList : ""}`}
        >
          {theme.catchable.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${styles.catchItem} ${isOverlay ? styles.overlayItem : ""}`}
            >
              <span className={styles.itemEmoji}>{item.emoji}</span>
              <span
                className={`${styles.itemPoints} ${isOverlay ? styles.overlayPoints : ""}`}
              >
                +{item.points}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Avoidable items */}
      <div
        className={`${styles.section} ${isOverlay ? styles.overlaySection : ""}`}
      >
        <div
          className={`${styles.sectionTitle} ${isOverlay ? styles.overlay : ""}`}
        >
          ❌ AVOID
        </div>
        <div
          className={`${styles.itemsList} ${isOverlay ? styles.overlayList : ""}`}
        >
          {theme.avoidable.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${styles.avoidItem} ${isOverlay ? styles.overlayItem : ""}`}
            >
              <span className={styles.itemEmoji}>{item.emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
