import React from "react";
import Link from "next/link";
import Text from "../block-components/Typography/Text";

const Header = ({ config, story }) => {
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
              <Link href={"#" + navItem.text}>
                <Text type="emphasizeBig">{navItem.text}</Text>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
