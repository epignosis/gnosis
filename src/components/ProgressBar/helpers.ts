import { BorderRadius } from "./types";

export function getBorderRadiusCss(borderRadius?: number | BorderRadius): string {
  if (typeof borderRadius === "number") {
    return `border-radius: ${borderRadius}px;`;
  }

  if (borderRadius && typeof borderRadius === "object") {
    return `
   border-start-start-radius: ${borderRadius.startStartRadius}px;
   border-start-end-radius: ${borderRadius.startEndRadius}px;
   border-end-end-radius: ${borderRadius.endEndRadius}px;
   border-end-start-radius: ${borderRadius.endStartRadius}px;`;
  }

  return "";
}
