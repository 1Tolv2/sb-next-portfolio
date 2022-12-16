import React, { useState } from "react";
import NavigationMain from "./variations/NavigationMain/NavigationMain";
import NavigationReturn from "./variations/NavigationReturn";

const Navigation = ({ config, type, children }) => {
  return (
    <nav className="fixed z-40 w-screen h-28 xl:h-36 flex justify-between items-center bg-white">
      {type === "page" ? (
        <NavigationMain config={config} />
      ) : (
        <NavigationReturn config={config} />
      )}
      {children}
    </nav>
  );
};

export default Navigation;
