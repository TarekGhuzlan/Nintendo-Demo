import React from "react";
import MenuIcon from "../assets/icons/MenuIcon.svg";
import HeartIcon from "../assets/icons/HeartIcon.svg";
import CartIcon from "../assets/icons/CartIcon.svg";
import UserIcon from "../assets/icons/UserIcon.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import { ReactSVG } from "react-svg";

const SmallScreenStickyMenu = ({ openSearch, openMenu }) => {
  return (
    <div className="w-full h-[74px] bg-gradient-to-t from-[#00000033] to-[#00000000] fixed bottom-0 block left-1/2 z-[1000] -translate-x-[50%]">
      <div className="m-auto h-[58px] w-[96%] max-w-[440px]">
        <nav className="relative h-[58px] w-max flex items-center justify-between px-4 bg-white rounded-[100px] shadow-md">
          <a className="flex justify-center content-center flex-grow flex-shrink basis-auto relative w-[87px] h-[58px] items-center text-nin_darkgray hover:text-nin_red ease-in-out duration-200">
            <ReactSVG src={MenuIcon} onClick={openMenu} />
          </a>
          <a
            href=""
            className="flex justify-center content-center flex-grow flex-shrink basis-auto relative w-[87px] h-[58px] items-center text-nin_darkgray hover:text-nin_red ease-in-out duration-200"
          >
            <ReactSVG src={HeartIcon} className="w-6" />
          </a>
          <a
            className="flex justify-center content-center items-center -mt-4 w-[60px] h-[60px] bg-nin_red rounded-[50%] text-white"
            onClick={openSearch}
          >
            <ReactSVG src={SearchIcon} className="w-8" />
          </a>
          <a
            href=""
            className="flex justify-center content-center flex-grow flex-shrink basis-auto relative w-[87px] h-[58px] items-center text-nin_darkgray hover:text-nin_red ease-in-out duration-200"
          >
            <ReactSVG src={CartIcon} className="w-6" />
          </a>
          <a className="flex justify-center content-center flex-grow flex-shrink basis-auto relative w-[87px] h-[58px] items-center text-nin_darkgray hover:text-nin_red ease-in-out duration-200">
            <ReactSVG src={UserIcon} className="w-6" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SmallScreenStickyMenu;
