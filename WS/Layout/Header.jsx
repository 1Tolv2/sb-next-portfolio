import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>Header</div>;
};

export default Header;
