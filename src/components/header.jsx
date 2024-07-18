import React, { useState } from "react";
import TopHeader from "./topHeader";
import BottomHeader from "./bottomHeader";
import MegaMenu from "./megaMenu";
import SmallScreenHeader from "./smallScreenHeader";
import LowerHeaderBar from "./lowerHeaderBar";
import StickyHeader from "./stickyHeader";

const Header = () => {
  const [megaMenuIsOpen, setMegaMenuIsOpen] = useState(false);
  const [megaMenuOptions, setMegaMenuOptions] = useState([]);

  const openMegaMenu = (options) => {
    if (options.length > 0) {
      setMegaMenuIsOpen(!megaMenuIsOpen);
      setMegaMenuOptions(options);
    }
  };

  const closeMegaMenu = () => {
    setMegaMenuIsOpen(false);
  };
  return (
    <>
      <div className="hidden lg:block w-full">
        <TopHeader />
        <BottomHeader onClick={openMegaMenu} />
        <MegaMenu
          isOpen={megaMenuIsOpen}
          options={megaMenuOptions}
          onClick={closeMegaMenu}
        />
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
