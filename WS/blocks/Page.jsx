import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Section from "../containers/Section";

const Page = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="max-h-screen lg:overflow-y-scroll lg:snap lg:snap-y lg:snap-mandatory print:hidden"
    >
      {blok.body.map((nestedBlok, index) => {
        return (
          <Section
            isFirstSection={index === 0}
            pageType={blok?.component}
            blok={{
              ...nestedBlok?.block_config?.[0],
              section_name_id: nestedBlok?.preamble,
            }}
            key={nestedBlok?._uid}
          >
            <StoryblokComponent blok={nestedBlok} />
          </Section>
        );
      })}
    </div>
  );
};

export default Page;
