import React from "react";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";
import Link from "next/link";

const renderArticleCard = (article) => {
  const { content } = article;
  return (
    <div className="relative h-fit w-full lg:mt-20 " key={article.uuid}>
      <div className="w-full h-72">
        <div
          style={{ backgroundImage: `url(${content?.image?.filename})` }}
          className="w-full h-full bg-center bg-cover"
        />
        <div className="absolute top-0 left-0 w-full h-72 bg-secondary-main opacity-40" />
      </div>
      <div className="relative bottom-20 w-11/12 mx-auto bg-card-background bg-cover bg-top px-3 lg:px-5 pt-4 lg:pt-11 pb-3 lg:pb-7">
        <Heading type="h3">{article?.name}</Heading>
        <Text>{content?.summary}</Text>
        <div className="flex my-3 ">
          <Link
            className="flex items-center h-fit ml-1 mt-5"
            href={article?.full_slug || ""}
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
        article.content.link_text = blok?.link_text || "";
        return renderArticleCard(article);
      })}
    </div>
  );
};

export default ArticlePreviewList;
