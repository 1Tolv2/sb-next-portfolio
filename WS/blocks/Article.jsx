import React from "react";
import RichTextRenderer from "../components/RichTextRenderer";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";

const Article = ({ blok }) => {
  return (
    <div className="bg-neutral min-h-screen">
      <div className="bg-white max-w-[1000px] py-32 md:py-56 px-6 md:px-20 mx-auto">
        <img
          className="w-full mb-10"
          src={blok?.image?.filename}
          alt={blok?.image?.alt}
        />
        <div className="mb-14">
          <Heading>{blok?.title}</Heading>
          <Text type="emphasizeBig">{blok?.preamble}</Text>
          <div></div>
        </div>
        <div className="sm:w-2/4 xl:w-3/4 mx-auto">
          <RichTextRenderer content={blok?.text} />
        </div>
      </div>
    </div>
  );
};

export default Article;
