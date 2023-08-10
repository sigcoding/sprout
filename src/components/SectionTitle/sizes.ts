import { Size } from "./types";

export const textSize = (size: Size) => {
  if (size === "h1") return "text-5xl font-bold";
  if (size === "h2") return "text-4xl font-bold";
  if (size === "h3") return "text-3xl font-bold";
  if (size === "h4") return "text-2xl font-bold";
  if (size === "h5") return "text-xl font-bold";
  if (size === "h6") return "text-base";
  if (size === "body-1") return "text-base";
  if (size === "body-2") return "text-sm";
  if (size === "label-1") return "text-sm font-medium";
  if (size === "cap-1") return "text-base font-semibold uppercase";
  if (size === "cap-2") return "text-xs";
  if (size === "cap-3") return "text-base font-semibold uppercase";
  if (size === "cap-4") return "text-base font-medium uppercase";
  if (size === "link") return "text-sm underline";
};
