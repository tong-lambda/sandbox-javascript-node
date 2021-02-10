import { calculateArea as squareArea } from "./modules/square.js";
import circleArea from "./modules/circle.js";

export function calculateTotalArea(length, radius) {
  return squareArea(length) + circleArea(radius);
}
