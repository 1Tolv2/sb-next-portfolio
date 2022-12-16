import React, { useState } from "react";
import Heading from "./Typography/Heading";
const CoverModal = ({ blok }) => {
  const [activeTab, setActiveTab] = useState("cv");
  return (
    <div className="fixed z-[100] top-0 left-0 w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit w-[calc(100vw-20px)] lg:w-[calc(100vw-100px)] bg-white p-24">
        <div>
          <Heading type="h2">Hej</Heading>
        </div>
      </div>
      <div className="absolute -z-10 top-0 left-0 h-full w-full backdrop-blur bg-transparent" />
    </div>
  );
};

export default CoverModal;
