import styles from "./FoodItem.module.css";
import { GAME_CONFIG } from "../../constants/gameConfig";

export default function FoodItem({ food }) {
  return (
    <div
      className={`${styles.foodItem} ${styles[food.type]}`}
      style={{
        left: `${food.x}%`,
        top: `${food.y}px`,
        fontSize: `${GAME_CONFIG.FOOD_SIZE}px`,
      }}
    >
      {food.emoji}
    </div>
  );
}
