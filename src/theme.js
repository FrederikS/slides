import React from "react";
import { themes } from "mdx-deck";
import { Prism } from "react-syntax-highlighter";

const getLanguage = (className) => {
  const match = /language-(\w*)/.exec(className || "language-javascript");
  let lang = "javascript";
  if (match && match.length > 1) {
    lang = match[1];
  }
  return lang;
};

const pre = (props) => props.children;

const code = (props) => {
  const language = getLanguage(props.className);
  return <Prism language={language} {...props} showLineNumbers />;
};

export default {
  ...themes.poppins,
  ...themes.prism,
  colors: {
    background: "#fff",
    text: "#000",
  },
  fonts: {
    ...themes.poppins.fonts,
    monospace: "'JetBrains Mono', monospace;",
  },
  styles: {
    ...themes.poppins.styles,
    li: {
      margin: ".5em",
    },
    code: {
      fontSize: ".5em",
    },
    Slide: {
      padding: "0 10%"
    }
  },
  components: {
    pre,
    code,
  },
};
