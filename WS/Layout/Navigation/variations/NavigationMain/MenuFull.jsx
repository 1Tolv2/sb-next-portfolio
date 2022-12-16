import React from "react";
import NavItem from "../../NavItem";

const MenuFull = ({ config }) => {
  return (
    <ul className="hidden md:flex">
      {config?.content?.navigation_left?.map((item) => {
        return (
          <li key={item._uid} className="mr-14 w-max">
            <NavItem data={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuFull;
