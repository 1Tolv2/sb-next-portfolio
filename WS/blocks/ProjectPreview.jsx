import React from "react";
import Heading from "../block-components/Typography/Heading";
import Preamble from "../block-components/Typography/Preamble";
import Text from "../block-components/Typography/Text";
import AccentLine from "../block-components/AccentLine";
import Link from "next/link";

const ProjectPreview = ({ blok }) => {
  // console.log("BLOK", blok);
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-1 w-3/4 lg:w-auto mx-auto gap-5 items-end">
      {blok?.projects?.map((project) => {
        console.log("BLOK", project);

        const nestedBlok = project?.content;
        return (
          <div className="h-fit w-full">
            <div>
              <Heading type="h3">{nestedBlok?.title}</Heading>
            </div>
            <div className="relative">
              <Text>{nestedBlok?.description}</Text>
              <AccentLine />
              <div className="flex flex-wrap items-center">
                {project?.tag_list?.map((tag, index) => {
                  return (
                    <>
                      <Text type="tags">{tag}</Text>
                      {index !== project?.tag_list?.length - 1 && (
                        <span className="w-2 h-2 mx-2 md:mx-3 bg-secondary-main rounded-full" />
                      )}
                    </>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 items-stretch justify-between my-3 ">
                <Link
                  className="flex items-center h-fit ml-1"
                  href={nestedBlok?.github_link?.url}
                >
                  <Text type="emphasize">Go to demo</Text>
                  <img className="ml-2 h-6" src="/external_link_icon.svg" />
                </Link>
                <Link
                  className="flex justify-end items-center h-fit mr-2"
                  href={nestedBlok?.github_link?.url}
                >
                  <Text type="emphasize">View source code</Text>
                  <img className="ml-2 h-6" src="/external_link_icon.svg" />
                </Link>
              </div>
              <img className="w-full" src={nestedBlok?.images?.[0]?.filename} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPreview;
