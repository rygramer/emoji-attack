// Healthy foods - catch these to gain points!
const HEALTHY_FOODS = [
  { type: "healthy", emoji: "🥦", name: "Broccoli", points: 10, speed: 1 },
  { type: "healthy", emoji: "🥕", name: "Carrot", points: 10, speed: 1 },
  { type: "healthy", emoji: "🍎", name: "Apple", points: 15, speed: 1.2 },
  { type: "healthy", emoji: "🥗", name: "Salad", points: 20, speed: 0.8 },
  { type: "healthy", emoji: "🍊", name: "Orange", points: 15, speed: 1.1 },
  { type: "healthy", emoji: "🍇", name: "Grapes", points: 12, speed: 1.3 },
  { type: "healthy", emoji: "🥬", name: "Lettuce", points: 10, speed: 0.9 },
];

// Unhealthy foods - avoid these or lose lives and points!
const UNHEALTHY_FOODS = [
  { type: "unhealthy", emoji: "🍭", name: "Lollipop", points: -15, speed: 1.3 },
  { type: "unhealthy", emoji: "🍩", name: "Donut", points: -20, speed: 1 },
  { type: "unhealthy", emoji: "🍰", name: "Cake", points: -25, speed: 0.9 },
  {
    type: "unhealthy",
    emoji: "🍫",
    name: "Chocolate",
    points: -15,
    speed: 1.1,
  },
  { type: "unhealthy", emoji: "🍪", name: "Cookie", points: -18, speed: 1.2 },
  { type: "unhealthy", emoji: "🧁", name: "Cupcake", points: -20, speed: 1 },
];

// Combined array of all food types
export const ALL_FOODS = [...HEALTHY_FOODS, ...UNHEALTHY_FOODS];
