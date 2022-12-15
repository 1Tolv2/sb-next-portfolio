import React from "react";
import Button from "../Button";

const ButtonGhost = (props) => {
  const customProps = {
    ...props,
  };
  return <Button {...customProps} />;
};

export default ButtonGhost;
