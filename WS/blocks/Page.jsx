import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Section from "./Section";

const Page = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => {
        return (
          <Section
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
