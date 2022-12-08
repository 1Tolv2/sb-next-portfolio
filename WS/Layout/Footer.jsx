import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Footer = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>Footer</div>;
};

export default Footer;
