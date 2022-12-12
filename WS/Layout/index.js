import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ story, configData, children }) => {
  return (
    <>
      {/* <Header story={story} config={configData} /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
