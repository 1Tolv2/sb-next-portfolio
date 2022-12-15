import React, { useState } from "react";
import Link from "next/link";
import Text from "../components/Typography/Text";
import ReturnHeader from "./ReturnHeader";

const Header = ({ config, story }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = config?.content?.logo?.[0];
  return (
    <nav className="fixed z-40 w-screen h-28 xl:h-36 flex justify-between items-center bg-white">
      {story?.content?.component === "page" ? (
        <>
          <div className="flex items-center">
            <Link href="/">
              <div className="relative z-20 flex justify-center items-center mx-3 md:mx-12 bg-secondary-main h-20 w-20 rounded-full">
                <img className="relative right-px" src={logo?.filename} />
              </div>
            </Link>
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
                  <ul className="flex flex-col justify-center items-center sm:block absolute h-screen w-screen sm:w-fit z-10 top-0 pt-32 left-0 bg-primary-light pl-4 pr-14 py-3">
                    {config?.content?.navigation_left?.map((navItem) => {
                      return (
                        <li key={navItem._uid} className="mb-12 sm:mb-3">
                          <Link href={"#" + navItem.text || "/"}>
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
                    <Link
                      className="flex items-center"
                      href={"#" + navItem.text || "/"}
                    >
                      <span className="text-accent-main text-3xl">{"# "}</span>
                      <Text type="emphasizeBig">{navItem.text}</Text>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="flex justify-end w-full md:w-fit">
            {config?.content?.navigation_right?.map((navItem) => {
              return (
                <li key={navItem._uid} className="sm:mr-5 md:mr-14 w-fit">
                  <Link
                    className="flex items-center"
                    href={navItem?.link?.url || "/"}
                  >
                    {navItem.icon !== "" && (
                      <img
                        className="w-12 mr-3"
                        src={navItem?.icon?.filename}
                      />
                    )}
                    {navItem.text && (
                      <Text type="emphasizeBig">{navItem.text}</Text>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <ReturnHeader config={config} />
      )}
    </nav>
  );
};

export default Header;
