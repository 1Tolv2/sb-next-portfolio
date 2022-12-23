import React from "react";
import ModalContactInfo from "../components/ModalContactInfo";
import RichTextRenderer from "../components/RichTextRenderer";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";

const PersonalLetter = ({ blok, contactInfo }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="sm:hidden w-full text-center pl-8 md:pl-8 print:pl-4 print:w-full mb-5">
        <Heading>{blok?.title}</Heading>
        <Text align="center" type="emphasizeBig">
          {blok?.preamble}
        </Text>
      </div>
      <div className="flex items-center gap-5 sm:gap-0 sm:block sm:w-1/4 w-full">
        <div className="flex justify-center items-center print:justify-center w-4/12 sm:max-h-[calc(401px-20px)] sm:w-[calc(100%-20px)] sm:mb-[20px] overflow-clip print:block print:overflow-clip">
          <img
            className="h-auto w-full"
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="profile image"
          />
        </div>
        <ModalContactInfo blok={contactInfo?.body} hidden="none" />
      </div>
      <div className="w-full md:w-3/4 text-center sm:pl-8 print:pl-4 print:w-full">
        <div className="hidden sm:block">
          <Heading>{blok?.title}</Heading>
          <Text align="center" type="emphasizeBig">
            {blok?.preamble}
          </Text>
        </div>
        <div className="w-full md:w-3/4 sm:mt-10">
          <div className="flex items-baseline">
            <div className="w-max pr-4 print:py-4">
              <Heading type="h3">Hello!</Heading>
            </div>
            <div className="grow h-2 bg-primary-light" />
          </div>
          <RichTextRenderer content={blok?.text} />
        </div>
      </div>
    </div>
  );
};

export default PersonalLetter;
