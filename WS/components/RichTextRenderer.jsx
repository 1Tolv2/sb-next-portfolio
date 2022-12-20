import React from "react";
import {
  NODE_HEADING,
  NODE_LI,
  NODE_UL,
  NODE_PARAGRAPH,
  NODE_BR,
  render,
} from "storyblok-rich-text-react-renderer";
import Heading from "./Typography/Heading";
import Text from "./Typography/Text";

const RichTextRenderer = ({ content }) => {
  const resolvers = {
    markResolvers: {},
    nodeResolvers: {
      [NODE_HEADING]: (children, { type }) => (
        <Heading type={type}>{children}</Heading>
      ),
      [NODE_PARAGRAPH]: (children) => <Text>{children}</Text>,
      [NODE_BR]: () => <br />,
      [NODE_UL]: (children) => <ul className="list-disc ml-5">{children}</ul>,
      [NODE_LI]: (children) => (
        <li className="-py-10 print:-py-20">{children}</li>
      ),
    },
  };
  return <div>{render(content, resolvers)}</div>;
};

export default RichTextRenderer;
