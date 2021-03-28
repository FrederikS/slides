import React from "react";
import { themes } from "mdx-deck";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import githubStyle from "react-syntax-highlighter/dist/esm/styles/prism/ghcolors";

githubStyle["comment"]["fontStyle"] = "normal";

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
  const childrenWithoutEndingNewLine = props.children.substring(
    0,
    props.children.length - 1
  );
  const language = getLanguage(props.className);
  return (
    <SyntaxHighlighter
      style={githubStyle}
      language={language}
      customStyle={{
        fontSize: ".7em",
        width: "100%",
        padding: ".5em"
      }}
      showLineNumbers
    >
      {childrenWithoutEndingNewLine}
    </SyntaxHighlighter>
  );
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
    Slide: {
      padding: "0 10%",
      "@media screen and (min-width: 1450px)": {
        padding: "0 25%",
      },
    },
  },
  components: {
    pre,
    code,
  },
};
