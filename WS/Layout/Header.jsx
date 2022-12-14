import React, { useState } from "react";
import Link from "next/link";
import Text from "../block-components/Typography/Text";

const Header = ({ config, story }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log("CONFIG", config?.content);
  const logo = config?.content?.logo?.[0];
  return (
    <nav className="h-36 flex justify-between items-center">
      <div className="flex items-center">
        <div className="relative z-20 flex justify-center items-center mx-3 md:mx-12 bg-secondary-main h-20 w-20 rounded-full">
          <img className="relative right-px" src={logo?.filename} />
        </div>
        <div className="-ml-2 md:hidden self-end">
          {!isMenuOpen && (
            <span
              onClick={() => setIsMenuOpen(true)}
              className="animate-pulse text-primary-main"
            >
              &#9660;
            </span>
          )}
          {isMenuOpen && (
            <div>
              <span
                onClick={() => setIsMenuOpen(false)}
                className="relative z-20 text-neutral"
              >
                &#9650;
              </span>
              <ul className="absolute z-10 top-0 pt-32 left-0 bg-primary-light pl-4 pr-9 py-3 h-full">
                {config?.content?.navigation_left?.map((navItem) => {
                  return (
                    <li key={navItem._uid} className="mb-1">
                      <Link href={"#" + navItem.text}>
                        <Text isBackgroundDark={true} type="emphasizeBig">
                          {"# " + navItem.text}
                        </Text>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <ul className="hidden md:flex">
          {config?.content?.navigation_left?.map((navItem) => {
            return (
              <li key={navItem._uid} className="mr-14">
                <Link className="flex items-center" href={"#" + navItem.text}>
                  <span className="text-accent-main text-3xl">{"# "}</span>
                  <Text type="emphasizeBig">{navItem.text}</Text>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="flex justify-end w-full md:w-fit  ">
        {config?.content?.navigation_right?.map((navItem) => {
          return (
            <li key={navItem._uid} className="md:mr-14 w-fit">
              <Link className="flex items-center" href={navItem?.link?.url}>
                {navItem.icon !== "" && (
                  <img className="w-12 mr-3" src={navItem?.icon?.filename} />
                )}
                {navItem.text && (
                  <Text type="emphasizeBig">{navItem.text}</Text>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
