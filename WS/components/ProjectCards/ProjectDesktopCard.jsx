import React from "react";
import Link from "next/link";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";
import AccentLine from "../AccentLine";

const ProjectDesktopCard = ({ story }) => {
  const nestedBlok = story?.project?.content;
  const { link_texts } = story;
  return (
    <div className="h-fit w-full lg:w-1/3" key={story.id}>
      <Heading type="h3">{nestedBlok?.title}</Heading>
      <div className="relative">
        <Text>{nestedBlok?.description}</Text>
        <AccentLine />
        <div className="flex flex-wrap items-center">
          {story?.tag_list?.map((tag, index) => {
            return (
              <div className="flex flex-wrap items-center" key={index + 40}>
                <Text type="tags">{tag}</Text>
                {index !== story?.tag_list?.length - 1 && (
                  <span className="w-2 h-2 mx-2 md:mx-3 bg-secondary-main rounded-full" />
                )}
              </div>
            );
          })}
        </div>
        <div className="grid grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 items-stretch justify-between my-3 ">
          {nestedBlok?.deployed_link?.url ? (
            <Link
              className="flex items-center h-fit ml-1 mb-1 lg:mb-0"
              href={nestedBlok?.deployed_link?.url}
              target={nestedBlok?.deployed_link?.target}
              aria-label="Go to deployed demo"
            >
              <Text type="emphasize">{link_texts?.deploy}</Text>
              <img
                className="ml-2 h-4 lg:h-6"
                src="/external_link_icon.svg"
                alt="external link icon"
              />
            </Link>
          ) : (
            <div />
          )}

          {nestedBlok?.github_link?.url ? (
            <Link
              className="flex justify-end items-center h-fit mr-2"
              href={nestedBlok?.github_link?.url}
              target={nestedBlok?.github_link?.target}
              aria-label="Go to source code on github"
            >
              <Text type="emphasize">{link_texts?.source_code}</Text>
              <img
                className="ml-2 h-4 lg:h-6"
                src="/external_link_icon.svg"
                alt="external link icon"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
        <img
          className="w-full"
          src={nestedBlok?.images?.[0]?.filename}
          alt={nestedBlok?.images?.[0]?.alt}
        />
      </div>
    </div>
  );
};

export default ProjectDesktopCard;
