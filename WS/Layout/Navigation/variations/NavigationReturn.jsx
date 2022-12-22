import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import returnArrow from "../../../../public/return-back-svgrepo-com.svg";

const NavigationReturn = ({ config }) => {
  return (
    <>
      <div className="flex items-center">
        <span className="text-2xl ml-7">
          <Link href="/" aria-label={`Go back to home page`}>
            <img className="w-8 h-auto" src={returnArrow.src} />
          </Link>
        </span>
        <Logo image={config?.content?.logo?.[0]} />
      </div>
    </>
  );
};

export default NavigationReturn;
