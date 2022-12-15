import React from "react";
import Button from "../Button";
import { storyblokEditable } from "@storyblok/react";

const ButtonStandard = ({ blok }) => {
  return <Button {...storyblokEditable(blok)} />;
};

export default ButtonStandard;
