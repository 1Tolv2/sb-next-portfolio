import React from "react";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";
import { StoryblokComponent } from "@storyblok/react";

const renderMainContent = (title, content) => {
  return (
    <div className="w-full">
      <div className="flex items-baseline">
        <div className="w-max pr-4">
          <Heading type="h3">{title}</Heading>
        </div>
        <div className="grow h-2 bg-primary-light" />
      </div>
      <ul>
        {content?.map((nestedBlok) => {
          return (
            <li key={nestedBlok._uid}>
              <StoryblokComponent blok={nestedBlok} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CvTab = ({ blok }) => {
  console.log("BLOK", blok);
  return (
    <div className="flex flex-wrap flex-cols">
      <div className="w-1/4 text-center">
        <div>
          <Heading type="h4">Contact</Heading>
          <ul className="text-left">
            {blok?.contact?.map((item) => {
              return (
                <li key={item?._uid}>
                  <Text type="emphasize">{item.text}</Text>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Heading type="h4">Skills</Heading>
          <ul className="text-left">
            {blok?.skills?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <Heading type="h4">Languages</Heading>
          <ul className="text-left">
            {blok?.languages?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="w-3/4 pl-8">
        <div className="text-center">
          <Heading>{blok?.name}</Heading>
          <Text center type="emphasizeBig">
            {blok?.role}
          </Text>
        </div>
        {renderMainContent("Work Experience", blok?.experience)}
        {renderMainContent("Education", blok?.education)}
      </div>
    </div>
  );
};

export default CvTab;
