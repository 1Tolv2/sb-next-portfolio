import React from "react";
import NavigationMain from "./variations/NavigationMain/NavigationMain";
import NavigationReturn from "./variations/NavigationReturn";

const Navigation = ({ config, type, children }) => {
  return (
    <nav className="fixed z-40 w-screen h-24 xl:h-28 flex justify-between items-center bg-transparent-white">
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
