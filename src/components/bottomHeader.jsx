import React from "react";
import IconTextButton from "./common/iconTextButton";
import MyNintendoIcon from "../assets/icons/MyNintendoIcon.svg";
import DPadIcon from "../assets/icons/DPadIcon.svg";
import NinSwitchIcon from "../assets/icons/NinSwitchIcon.svg";
import NewsIcon from "../assets/icons/NewsIcon.svg";
import StarPlayIcon from "../assets/icons/StarPlayIcon.svg";
import MegaphoneIcon from "../assets/icons/MegaphoneIcon.svg";
import CalenderIcon from "../assets/icons/CalenderIcon.svg";
import ForKidsIcon from "../assets/icons/ForKidsIcon.svg";
import ForParentsIcon from "../assets/icons/ForParentsIcon.svg";

const BottomHeader = ({ onClick }) => {
  const iconsText = [
    {
      icon: MyNintendoIcon,
      text: "My Nintendo Store",
      isDropdown: true,
      options: [],
    },
    {
      icon: DPadIcon,
      text: "Games",
      isDropdown: true,
      options: [
        { icon: NinSwitchIcon, label: "Nintendo Switch games" },
        { icon: MegaphoneIcon, label: "New releases" },
        { icon: CalenderIcon, label: "Coming soon" },
        { icon: DPadIcon, label: "Shop games" },
      ],
    },
    {
      icon: NinSwitchIcon,
      text: "Nintendo Switch",
      isDropdown: true,
      options: [],
    },
    { icon: NewsIcon, text: "News & Events", isDropdown: false, options: [] },
    {
      icon: StarPlayIcon,
      text: "Play Nintendo",
      isDropdown: true,
      options: [
        { icon: ForKidsIcon, label: "For kids" },
        { icon: ForParentsIcon, label: "For parents" },
      ],
    },
  ];
  return (
    <div className="relative z-10 ">
      <div className="flex relative justify-center items-center h-[44px] border-b-[1px] border-b-nin_breadcrumbs z-[1]">
        <div className="flex gap-4 pt-0.5 pb-2">
          {iconsText.map((item) => (
            <IconTextButton
              icon={item.icon}
              text={item.text}
              isDropdown={item.isDropdown}
              onClick={() => onClick(item.options)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
