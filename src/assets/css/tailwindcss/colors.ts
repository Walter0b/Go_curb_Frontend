import _colors = require("tailwindcss/colors");
import { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

type customColorsType = { [key: string]: string | object };
const customColors = {
  primary: "rgb(var(--color-primary) / <alpha-value>)",

  secondary: "rgb(var(--color-sencondary) / <alpha-value>)",
} as customColorsType;

export const colors: ResolvableTo<RecursiveKeyValuePair<string, string>> = {
  inherit: _colors.inherit,
  current: _colors.current,
  transparent: _colors.transparent,
  black: _colors.black,
  white: _colors.white,
  slate: _colors.slate,
  gray: _colors.gray,
  zinc: _colors.zinc,
  neutral: _colors.neutral,
  stone: _colors.stone,
  red: _colors.red,
  orange: _colors.orange,
  amber: _colors.amber,
  yellow: _colors.yellow,
  lime: _colors.lime,
  green: _colors.green,
  emerald: _colors.emerald,
  teal: _colors.teal,
  cyan: _colors.cyan,
  sky: _colors.sky,
  blue: _colors.blue,
  indigo: _colors.indigo,
  violet: _colors.violet,
  purple: _colors.purple,
  fuchsia: _colors.fuchsia,
  pink: _colors.pink,
  rose: _colors.rose,
  // 'primary': 'rgb(0, 184, 179)',
  // 'primary': "#00b8b3",
  ...customColors,
};
