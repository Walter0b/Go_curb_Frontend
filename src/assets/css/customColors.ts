import { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const customColors: ResolvableTo<RecursiveKeyValuePair<string, string>> =
  {
    primary: {
      "50": "#71FFFB",
      "100": "#5CFFFB",
      "200": "#9be6e6",
      "300": "#61cbc8",
      "400": "#00b8b3",
      "500": "#1c907c",
      "600": "#197963",
      "700": "#175d4d",
      "800": "#123f39",
      "900": "#0c272a",
    },
    secondary: {
      "50": "#fafafa",
      "100": "#f1f1f6",
      "200": "#e1dbec",
      "300": "#c1b7d3",
      "400": "#0f172a",
      "500": "#816894",
      "600": "#684d75",
      "700": "#4e3957",
      "800": "#35263b",
      "900": "#0f172a",
    },
  };
