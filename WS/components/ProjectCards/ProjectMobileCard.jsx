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
      <div className="flex">
        <div className="flex flex-col justify-between relative">
          <div>
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
          </div>
          <div className="my-3 ">
            <Link
              className="flex items-center h-fit mb-1 lg:mb-0"
              href={nestedBlok?.github_link?.url || "/"}
            >
              <Text type="emphasize">Go to demo</Text>
              <img className="ml-2 h-4 lg:h-6" src="/external_link_icon.svg" />
            </Link>
            <Link
              className="flex items-center h-fit w-fit mr-2"
              href={nestedBlok?.github_link?.url || "/"}
            >
              <Text type="emphasize">View source code</Text>
              <img className="ml-2 h-4 lg:h-6" src="/external_link_icon.svg" />
            </Link>
          </div>
        </div>

        <img
          className="w-full self-end"
          src={nestedBlok?.images?.[0]?.filename}
        />
      </div>
    </div>
  );
};

export default ProjectMobileCard;
