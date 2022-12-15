import React from "react";
import Link from "next/link";

const ReturnHeader = ({ config }) => {
  const logo = config?.content?.logo?.[0];
  return (
    <>
      <div className="flex items-center">
        <span className="text-2xl ml-7">
          <Link href="/">&#8617;</Link>
        </span>
        <Link href="/">
          <div className="relative z-20 flex justify-center items-center mx-3 md:mx-12 bg-secondary-main h-20 w-20 rounded-full">
            <img className="relative right-px" src={logo?.filename} />
          </div>
        </Link>
      </div>
      <ul className="flex justify-end w-full md:w-fit  ">
        {config?.content?.navigation_right?.map((navItem) => {
          return (
            <li key={navItem._uid} className="md:mr-14 w-fit">
              <Link
                className="flex items-center"
                href={navItem?.link?.url || "/"}
              >
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
    </>
  );
};

export default ReturnHeader;
