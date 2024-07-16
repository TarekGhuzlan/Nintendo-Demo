import React from "react";
import IconTextButton from "./common/iconTextButton";
import MyNintendoIcon from "../assets/icons/MyNintendoIcon.svg";
import DPadIcon from "../assets/icons/DPadIcon.svg";
import NinSwitchIcon from "../assets/icons/NinSwitchIcon.svg";
import NewsIcon from "../assets/icons/NewsIcon.svg";
import StarPlayIcon from "../assets/icons/StarPlayIcon.svg";

const BottomHeader = () => {
  const iconsText = [
    { icon: MyNintendoIcon, text: "My Nintendo Store", isDropdown: true },
    { icon: DPadIcon, text: "Games", isDropdown: true },
    { icon: NinSwitchIcon, text: "Nintendo Switch", isDropdown: true },
    { icon: NewsIcon, text: "News & Events", isDropdown: false },
    { icon: StarPlayIcon, text: "Play Nintendo", isDropdown: true },
  ];
  return (
    <div className="relative z-10 ">
      <div className="flex relative justify-center items-center h-[44px] border-b-[1px] border-b-nin_breadcrumbs z-[1]">
        <IconTextButton elements={iconsText} />
      </div>
    </div>
  );
};

export default BottomHeader;
