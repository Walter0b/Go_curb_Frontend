// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "0%, 100%": {
            borderColor: "white",
          },
          "50%": {
            borderColor: "transparent",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s infinite",
      },
    },
  },
  plugins: [],
};
