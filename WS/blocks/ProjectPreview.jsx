import React from "react";
import Heading from "../block-components/Typography/Heading";
import Preamble from "../block-components/Typography/Preamble";
import Text from "../block-components/Typography/Text";
import AccentLine from "../block-components/AccentLine";

const ProjectPreview = ({ blok }) => {
  // console.log("BLOK", blok);
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-1 w-3/4 lg:w-auto mx-auto gap-5 items-end">
      {blok?.projects?.map((project) => {
        const nestedBlok = project?.content;
        return (
          <div className="h-fit w-full">
            <div>
              <Heading type="h3">{nestedBlok?.title}</Heading>
            </div>
            <div className="relative">
              {/* <div
                style={{ "var(--image-url)": project?.images?.[0]?.filename }}
                className="w-full h-full bg-[image:var(--image-url)] bg-center bg-contain"
              >
                <img src="/chat-app-thumbnail.svg" />
                <div />
              </div> 
                <img
                className="absolute top-0 left-0 w-full h-auto"
                src={
                  project?.platform === "mobile"
                    ? "/mobile-frame.svg"
                    : "/desktop-frame.svg"
                }
              /> */}
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
              <img className="w-full" src={nestedBlok?.images?.[0]?.filename} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPreview;
