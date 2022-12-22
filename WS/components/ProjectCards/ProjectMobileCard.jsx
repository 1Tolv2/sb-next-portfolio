import React from "react";
import Link from "next/link";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";
import AccentLine from "../AccentLine";

const ProjectMobileCard = ({ story }) => {
  const nestedBlok = story?.content;
  return (
    <div className="h-fit w-full" key={story.id}>
      <Heading type="h3">{nestedBlok?.title}</Heading>
      <div className="flex lg:flex-col xl:flex-row">
        <div className="flex flex-col relative">
          <Text>{nestedBlok?.description}</Text>
          <AccentLine />
          <div className="h-full flex lg:flex-col justify-between">
            <div className="flex flex-col justify-between md:block">
              <div className="flex flex-wrap items-center">
                {story?.tag_list?.map((tag, index) => {
                  return (
                    <div
                      className="flex flex-wrap items-center"
                      key={index + 40}
                    >
                      <Text type="tags">{tag}</Text>
                      {index !== story?.tag_list?.length - 1 && (
                        <span className="w-2 h-2 mx-2 md:mx-3 bg-secondary-main rounded-full" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="my-3 ">
                <Link
                  className="flex items-center h-fit mb-1 lg:mb-0"
                  href={nestedBlok?.github_link?.url || "/"}
                  aria-label="Go to page source code on github"
                >
                  <Text type="emphasize">Go to demo</Text>
                  <img
                    className="ml-2 h-4 lg:h-6"
                    src="/external_link_icon.svg"
                    alt="external link icon"
                  />
                </Link>
                <Link
                  className="flex items-center h-fit w-fit mr-2"
                  href={nestedBlok?.github_link?.url || "/"}
                  aria-label="Go to deployed demo"
                >
                  <Text type="emphasize">View source code</Text>
                  <img
                    className="ml-2 h-4 lg:h-6"
                    src="/external_link_icon.svg"
                    alt="external link icon"
                  />
                </Link>
              </div>
            </div>
            <img
              className="md:hidden w-1/2 pl-10 mt-2"
              src={nestedBlok?.images?.[0]?.filename}
              alt={nestedBlok?.images?.[0]?.alt}
            />
          </div>
        </div>

        <img
          className="hidden md:block pl-10 lg:pl-2 lg:w-1/2 lg:self-center"
          src={nestedBlok?.images?.[0]?.filename}
          alt={nestedBlok?.images?.[0]?.alt}
        />
      </div>
    </div>
  );
};

export default ProjectMobileCard;
