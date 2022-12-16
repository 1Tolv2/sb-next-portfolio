import React from "react";
import Link from "next/link";

const Logo = ({ image }) => {
  return (
    <Link href="/">
      <div className="relative z-20 flex justify-center items-center mx-3 md:mx-12 bg-secondary-main h-20 w-20 rounded-full">
        <img className="relative right-px" src={image?.filename} />
      </div>
    </Link>
  );
};

export default Logo;
