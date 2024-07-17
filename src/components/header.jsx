import React from "react";
import TopHeader from "./topHeader";
import BottomHeader from "./bottomHeader";
import SmallScreenHeader from "./smallScreenHeader";
import LowerHeaderBar from "./lowerHeaderBar";
import StickyHeader from "./stickyHeader";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block w-full">
        <TopHeader />
        <BottomHeader />
      </div>
      <div className="block lg:hidden w-full">
        <SmallScreenHeader />
      </div>
      <LowerHeaderBar />
      <StickyHeader />
    </>
  );
};

export default Header;
