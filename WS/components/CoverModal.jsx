import React, { useState } from "react";
import Heading from "./Typography/Heading";

const renderTab = (activeTab) => {
  switch (activeTab) {
    case "personal-letter":
      return (
        <div id="personal-letter">
          <Heading type="h2">Personal Letter</Heading>
        </div>
      );
    default:
      return (
        <div id="cv">
          <Heading type="h2">CV</Heading>
        </div>
      );
  }
};
const CoverModal = ({ blok }) => {
  const [activeTab, setActiveTab] = useState("cv");
  console.log("BLOK", blok);
  return (
    <div className="fixed z-[100] top-0 left-0 w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit w-[calc(100vw-20px)] lg:w-[calc(100vw-100px)] bg-white p-24">
        <ul className="flex">
          <li onClick={() => setActiveTab("cv")} className={`mr-5`}>
            CV
          </li>
          <li onClick={() => setActiveTab("personal-letter")} className="mr-5">
            Personal Letter
          </li>
        </ul>
        {renderTab(activeTab)}
      </div>
      <div className="absolute -z-10 top-0 left-0 h-full w-full backdrop-blur bg-transparent" />
    </div>
  );
};

export default CoverModal;
