import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Section from "./Section";

const Page = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => {
        return (
          <Section blok={nestedBlok}>
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          </Section>
        );
      })}
    </div>
  );
};

export default Page;
