import React from "react";
import SupportIcon from "../assets/icons/SupportIcon.svg";
import HeartIcon from "../assets/icons/HeartIcon.svg";
import CartIcon from "../assets/icons/CartIcon.svg";
import UserIcon from "../assets/icons/UserIcon.svg";
import TopIconText from "./common/topIconText";
import TopNintendoIcon from "./common/topNintendoIcon";
import Search from "./search";

const TopHeader = ({ onClick }) => {
  const topIcons = [
    { icon: SupportIcon, text: "Support" },
    { icon: HeartIcon, text: "Wish List" },
    { icon: CartIcon, text: "Cart" },
    { icon: UserIcon, text: "Log in / Sign up" },
  ];

  return (
    <div className="flex justify-between items-center h-[52px] border-b-[1px] border-b-nin_breadcrumbs bg-white relative z-[100]">
      <div className="flex basis-0 grow shrink items-center gap-4 ">
        <TopNintendoIcon />
        <div className="lg:basis-[28.125rem]">
          <Search placeHolder={"Search"} onClick={onClick} />
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-7 px-5">
        {topIcons.map((element) => (
          <span className="py-3.5">
            <TopIconText icon={element.icon} text={element.text} />
          </span>
        ))}

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
