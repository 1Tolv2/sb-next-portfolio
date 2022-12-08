import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>Hero</div>;
};

export default Hero;
