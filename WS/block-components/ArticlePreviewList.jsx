import React from "react";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";
import Link from "next/link";

const renderArticleCard = (article) => {
  const { content } = article;
  return (
    <div className="relative h-fit w-full lg:mt-16 " key={article.uuid}>
      <div className="w-full h-[45vw] lg:h-[15vw]">
        <div
          style={{ backgroundImage: `url(${content?.image?.filename})` }}
          className="w-full h-full bg-center bg-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[45vw] lg:h-[15vw] bg-secondary-main opacity-40" />
      </div>
      <div className="flex flex-col justify-between relative bottom-16 w-11/12 md:min-h-[250px] lg:min-h-[380px] mx-auto bg-card-background bg-cover bg-top px-3 lg:px-5 pt-4 lg:pt-11 pb-3 lg:pb-7">
        <div>
          <Heading type="h3">{article?.name}</Heading>
          <Text>{content?.summary}</Text>
        </div>
        <div className="flex my-3 ">
          <Link
            className="flex items-center h-fit ml-1 mt-5"
            href={article?.full_slug || ""}
            aria-label={`Read article ${article?.name}`}
          >
            <Text type="emphasize">{content?.link_text}</Text>
            <img
              className="ml-2 h-4 lg:h-6"
              src="/external_link_icon.svg"
              alt="link icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ArticlePreviewList = ({ blok }) => {
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-1 w-3/4 lg:w-auto mt-5 md:mt-0 mx-auto -mb-16 gap-x-5 xl:gap-x-14 items-end">
      {blok?.articles?.map((article) => {
        if (article.content) {
          article.content.link_text = blok?.link_text || "";
          return renderArticleCard(article);
        }
      })}
    </div>
  );
};

export default ArticlePreviewList;
