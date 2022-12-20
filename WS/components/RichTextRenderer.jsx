import React from "react";
import {
  NODE_HEADING,
  NODE_LI,
  NODE_PARAGRAPH,
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
    },
  };
  return <div>{render(content, resolvers)}</div>;
};

export default RichTextRenderer;
