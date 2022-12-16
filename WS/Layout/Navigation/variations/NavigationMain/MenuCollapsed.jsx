import React, { useState } from "react";
import NavItem from "../../NavItem";

const MenuCollapsed = ({ config }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="-ml-2 md:hidden self-end">
      {isMenuOpen ? (
        <div>
          <span
            onClick={() => setIsMenuOpen(false)}
            className="relative z-20 text-neutral"
          >
            &#9650;
          </span>
          <ul className="flex flex-col justify-center items-center sm:block absolute h-screen w-screen sm:w-fit z-10 top-0 pt-32 left-0 bg-primary-light pl-4 pr-14 py-3">
            {config?.content?.navigation_left?.map((item) => {
              return (
                <li
                  onClick={() => setIsMenuOpen(false)}
                  key={item._uid}
                  className="mb-12 sm:mb-3"
                >
                  <NavItem data={item} isBackgroundDark={true} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <span
          onClick={() => setIsMenuOpen(true)}
          className="animate-pulse text-primary-main"
        >
          &#9660;
        </span>
      )}
    </div>
  );
};

export default MenuCollapsed;
