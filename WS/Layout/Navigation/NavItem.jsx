import React from "react";
import Link from "next/link";
import Text from "../../components/Typography/Text";

const NavItem = ({ data, isBackgroundDark }) => {
  return data?.link?.anchor !== "" ? (
    <Link href={"#" + data?.text || "/"}>
      <Text isBackgroundDark={isBackgroundDark} type="emphasizeBig">
        <span
          className={`text-${
            isBackgroundDark ? "neutral" : "accent-main"
          } text-3xl`}
        >
          {"# "}
        </span>
        {data.text}
      </Text>
    </Link>
  ) : (
    <Link href={data?.text || "/"}>
      <Text isBackgroundDark={isBackgroundDark} type="emphasizeBig">
        {data.text}
      </Text>
    </Link>
  );
};

export default NavItem;
