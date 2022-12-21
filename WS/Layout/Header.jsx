import React from "react";
import Navigation from "./Navigation/Navigation";
import Link from "next/link";
import Text from "../components/Typography/Text";

const Header = ({ config, story }) => {
  return (
    <Navigation config={config} type={story?.content?.component}>
      <ul className="flex justify-end w-full md:w-fit">
        {config?.content?.navigation_right?.map((item) => {
          return (
            <li key={item._uid} className="sm:mr-5 lg:mr-14 w-fit">
              <Link
                className="flex items-center"
                href={item?.link?.url || "/"}
                aria-label={`Navigate to external page`}
              >
                {item.icon !== "" && (
                  <img
                    className="w-12 mr-3"
                    src={item?.icon?.filename}
                    alt={item?.icon?.alt}
                  />
                )}
                {item.text && <Text type="emphasizeBig">{item.text}</Text>}
              </Link>
            </li>
          );
        })}
      </ul>
    </Navigation>
  );
};

export default Header;
