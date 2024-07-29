import React from "react";
import { ReactSVG } from "react-svg";
import NintendoIcon from "../../assets/icons/NintendoIcon.svg";

const TopNintendoIcon = () => {
  return (
    <a href="#" className="inline-flex items-center ">
      <div className="w-[105px] h-[52px] bg-nin_red flex justify-center items-center text-white">
        <ReactSVG src={NintendoIcon} className="w-[69px]" />
      </div>
    </a>
  );
};

export default TopNintendoIcon;
