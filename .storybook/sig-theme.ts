import { create } from "@storybook/theming/create";
import sigLogo from "../public/sig-logo.png";

export default create({
  base: "dark",

  fontBase: "Inter, sans-serif",
  fontCode: "Lunema, monospace",

  brandTitle: "Sig Coding",
  brandUrl: "https://sprout-sooty.vercel.app",
  brandImage: sigLogo,
  brandTarget: "_self",

  colorPrimary: "#1A1A1A",
  colorSecondary: "#00D19F",

  appBg: "#1A1A1A",

  textInverseColor: "#1A1A1A",
  textColor: "#F9F7F8",
});
