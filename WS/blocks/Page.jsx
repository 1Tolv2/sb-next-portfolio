import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Section from "../container/Section";

const Page = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="max-h-screen lg:overflow-y-scroll lg:snap lg:snap-y lg:snap-mandatory"
    >
      {blok.body.map((nestedBlok) => {
        return (
          <Section
            pageType={blok?.component}
            blok={{
              ...nestedBlok?.body?.find(
                (item) => item.component === "section-config"
              ),
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
