import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import githubStyle from "react-syntax-highlighter/dist/esm/styles/prism/ghcolors";
import components from "gatsby-theme-mdx-deck/src/gatsby-plugin-theme-ui/components";

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
        padding: ".5em",
      }}
      showLineNumbers
    >
      {childrenWithoutEndingNewLine}
    </SyntaxHighlighter>
  );
};

export default {
  ...components,
  pre,
  code,
};
