import React from "react";
import Link from "next/link";
import Logo from "../Logo";

const NavigationReturn = ({ config }) => {
  return (
    <>
      <div className="flex items-center">
        <span className="text-2xl ml-7">
          <Link href="/">&#8617;</Link>
        </span>
        <Logo image={config?.content?.logo?.[0]} />
      </div>
    </>
  );
};

export default NavigationReturn;
