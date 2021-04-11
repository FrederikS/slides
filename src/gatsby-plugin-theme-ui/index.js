import { poppins } from "@mdx-deck/themes";

export default {
  ...poppins,
  colors: {
    background: "#fff",
    text: "#000",
  },
  fonts: {
    ...poppins.fonts,
    monospace: "'JetBrains Mono', monospace;",
  },
  styles: {
    ...poppins.styles,
    li: {
      margin: ".5em",
    },
    Slide: {
      fontFamily: "body",
      fontSize: [3, 4, 5, 5],
      padding: "0 10%",
      "@media screen and (min-width: 1450px)": {
        padding: "0 25%",
      },
    },
  },
};
