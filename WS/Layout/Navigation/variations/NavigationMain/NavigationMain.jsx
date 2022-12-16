import React from "react";
import Logo from "../../Logo";
import MenuCollapsed from "./MenuCollapsed";
import MenuFull from "./MenuFull";

const NavigationMain = ({ config }) => {
  return (
    <>
      <div className="flex items-center">
        <Logo image={config?.content?.logo?.[0]} />
        <MenuCollapsed config={config} />
        <MenuFull config={config} />
      </div>
    </>
  );
};

export default NavigationMain;
