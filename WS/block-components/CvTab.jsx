import React from "react";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";
import { StoryblokComponent } from "@storyblok/react";
import RichTextRenderer from "../components/RichTextRenderer";
import ModalContactInfo from "../components/ModalContactInfo";

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
    <div
      className="w-2/4
       md:w-auto print:w-full print:h-min mb-10"
    >
      <Heading type="h4">{title}</Heading>
      <RichTextRenderer content={blok} />
    </div>
  );
};

const CvTab = ({ blok, contactInfo }) => {
  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-row print:p-0 print:w-full print:flex-row print:flex-wrap">
      <div className="flex flex-wrap md:block w-full md:w-1/4 text-center print:gap-0 print:w-1/4 print:flex-wrap print:block">
        <div className="hidden md:flex print:justify-center justify-center items-center max-h-[calc(401px-20px)] w-[calc(100%-20px)] mb-[20px] overflow-clip print:block print:overflow-clip">
          <img
            className="h-auto w-full"
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="profile image"
          />
        </div>
        <ModalContactInfo blok={contactInfo?.body} hidden={false} />
        {renderSideContent("Skills", blok?.skills)}
        {renderSideContent("Languages", blok?.languages)}
      </div>
      <div className="w-full md:w-3/4 pl-0 md:pl-8 print:pl-4 print:w-3/4">
        <div className="text-center">
          <Heading>{blok?.name}</Heading>
          <Text align="center" type="emphasizeBig">
            {blok?.role}
          </Text>
        </div>
        <ModalContactInfo blok={contactInfo?.body} hidden={true} />
        {renderMainContent("Work Experience", blok?.experience)}
        {renderMainContent("Education", blok?.education)}
      </div>
    </div>
  );
};

export default CvTab;
