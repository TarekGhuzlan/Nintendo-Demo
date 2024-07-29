import React from "react";
import NintendoIcon from "../assets/icons/NintendoIcon.svg";
import NintendoStoreIcon from "../assets/icons/NintendoStoreIcon.svg";
import { ReactSVG } from "react-svg";

const SmallScreenHeader = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 h-[46px] bg-nin_red text-white z-10">
      <a href="#" className="inline-flex items-center ">
        <ReactSVG src={NintendoIcon} className="w-[89px]" />
      </a>
      <div className="flex h-full items-center">
        <a href="#" className="inline-flex items-center ">
          <ReactSVG src={NintendoStoreIcon} />
        </a>
        <span className="block w-5 h-5"></span>
        <a href="#" className="inline-flex items-center justify-center">
          <span className="border-[1px] rounded border-white overflow-hidden">
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

export default SmallScreenHeader;
