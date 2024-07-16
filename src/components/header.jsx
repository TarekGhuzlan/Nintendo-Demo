import React from "react";
import TopHeader from "./topHeader";
import BottomHeader from "./bottomHeader";
import LowerHeaderBar from "./lowerHeaderBar";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block w-full">
        <TopHeader />
        <BottomHeader />
      </div>
      <LowerHeaderBar />
    </>
  );
};

export default Header;
