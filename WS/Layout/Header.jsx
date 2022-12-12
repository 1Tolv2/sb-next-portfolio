import React from "react";
import Text from "../block-components/Typography/Text";

const Header = ({ config, story }) => {
  console.log("BLOK: ", config.content);
  const logo = config?.content?.logo?.[0];
  return (
    <nav className="h-36 flex justify-start items-center">
      <div className="flex justify-center items-center mx-12 bg-secondary-main h-20 w-20 rounded-full">
        <img className="relative right-px" src={logo?.filename} />
      </div>
      <ul className="flex">
        {config?.content?.navigation?.map((navItem) => {
          return (
            <li key={navItem._uid} className="mr-14">
              <Text type="emphasizeBig">{navItem.text}</Text>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
