import React from "react";
import NintendoIcon from "../assets/icons/NintendoIcon.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import SupportIcon from "../assets/icons/SupportIcon.svg";
import HeartIcon from "../assets/icons/HeartIcon.svg";
import CartIcon from "../assets/icons/CartIcon.svg";
import UserIcon from "../assets/icons/UserIcon.svg";
import TopIconText from "./common/topIconText";
import { FlowbiteInlineDropdown } from "./flowbite/flowbiteInlineDropdown";
import { ReactSVG } from "react-svg";

const TopHeader = () => {
  const topIcons = [
    { icon: SupportIcon, text: "Support" },
    { icon: HeartIcon, text: "Wish List" },
    { icon: CartIcon, text: "Cart" },
    { icon: UserIcon, text: "Log in / Sign up" },
  ];
  const categories = [
    "All categories",
    "Games",
    "Hardware",
    "Merchandise",
    "News & Events",
    "Support",
  ];
  return (
    <div className="flex justify-between items-center h-[52px] border-b-[1px] border-b-nin_breadcrumbs bg-white relative z-[100]">
      <div className="flex basis-0 grow shrink items-center gap-4 ">
        <a href="#" className="inline-flex items-center ">
          <div className="w-[105px] h-[52px] bg-nin_red flex justify-center items-center text-white">
            <ReactSVG src={NintendoIcon} className="w-[69px]" />
          </div>
        </a>
        <div className="lg:basis-[28.125rem]">
          <form className="lg:max-w-[28.125rem] lg:text-sm flex items-center justify-between border-b-[1px] border-b-nin_darkgray h-[2.125rem] w-full hover:border-nin_red duration-200 delay-0 ease-in-out">
            <span className="w-full">
              <button className="flex items-center text-nin_lightgray h-full w-full leading-6 hover:text-nin_red duration-200 delay-0 ease-in-out">
                <ReactSVG src={SearchIcon} className="mr-2.5 " />
                <span className="truncate ">Search</span>
              </button>
            </span>
            <div className="relative lg:inline-block basis-[140px] shrink-0 text-xs">
              <div className="flex font-bold">
                <div className="grid pl-2 pr-1 py-0.5 items-center relative">
                  <div>
                    <FlowbiteInlineDropdown options={categories} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-7 px-5">
        <TopIconText elements={topIcons} />
        <a className="py-3.5 inline-flex items-center content-center">
          <span className="border-r-4 border-white overflow-hidden">
            <img
              src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png"
              alt="Flag of Usa"
              loading="lazy"
              className="rounded-[4px]"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
