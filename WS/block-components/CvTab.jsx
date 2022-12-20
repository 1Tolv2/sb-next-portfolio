import React from "react";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";
import { StoryblokComponent } from "@storyblok/react";
import RichTextRenderer from "../components/RichTextRenderer";

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
const renderSideContent = (title, blok) => {
  return (
    <div className="w-1/3 md:w-auto print:w-full print:h-min">
      <Heading type="h4">{title}</Heading>
      {blok.content ? (
        <RichTextRenderer content={blok} />
      ) : (
        <ul className="text-left">
          {blok?.map((item, index) => {
            const text = typeof item === "string" ? item : item?.text;
            return (
              <li key={item?._uid || index}>
                {title === "Contact" && <img src="" />}
                <Text type="emphasize">{text}</Text>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
const CvTab = ({ blok }) => {
  console.log("BLOK", blok);
  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-row print:p-0 print:w-full print:flex-row print:flex-wrap">
      <div className="flex gap-10 md:block w-full md:w-1/4 text-center print:gap-0 print:w-1/4 print:flex-wrap">
        <div className="max-h-[calc(401px-20px)] w-[calc(100%-20px)] mb-[20px] overflow-clip">
          <img
            className="h-auto w-full"
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="profile image"
          />
        </div>
        {renderSideContent("Contact", blok?.contact)}
        {renderSideContent("Skills", blok?.skills)}
        {renderSideContent("Languages", blok?.languages)}
      </div>
      <div className="w-full md:w-3/4 pl-8 print:pl-4 print:w-3/4">
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
