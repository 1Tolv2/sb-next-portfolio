import React from "react";
import Text from "./Typography/Text";

const IconWithText = ({ icon, children, alt }) => {
  return (
    <div className={`w-20 lg:w-28 h-auto`}>
      <img className="w-12 lg:w-20 mx-auto" src={icon} alt={alt} />
      <Text align="center">{children}</Text>
    </div>
  );
};

export default IconWithText;
