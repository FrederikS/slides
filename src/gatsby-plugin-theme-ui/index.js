import { poppins as theme } from "@mdx-deck/themes";

export default {
  ...theme,
  colors: {
    background: "#fff",
    text: "#000",
  },
  fonts: {
    ...theme.fonts,
    monospace: "'JetBrains Mono', monospace;",
  },
  styles: {
    ...theme.styles,
    li: {
      margin: ".5em",
    },
    blockquote: {
      fontStyle: "italic",
      color: "#555555",
      padding: "0.5em 30px 0 75px",
      borderLeft: "8px solid #78C0A8",
      lineHeight: "1.6",
      position: "relative",
      background: "#EDEDED",
      "&:before": {
        fontFamily: "Arial",
        content: '"\\201C"',
        color: "#78C0A8",
        fontSize: "4em",
        position: "absolute",
        left: "10px",
        top: "-10px",
      },
      // "&:after": {
      //   fontFamily: "Arial",
      //   content: '"\\201C"',
      //   color: "#78C0A8",
      //   fontSize: "4em",
      //   position: "absolute",
      //   right: "1rem",
      //   bottom: "-1rem",
      // },
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
