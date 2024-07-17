import React from "react";
import ShippingTruckIcon from "../assets/icons/ShippingTruckIcon.svg";
import NintendoPointsIcon from "../assets/icons/NintendoPointsIcon.svg";
import { ReactSVG } from "react-svg";

const LowerHeaderBar = () => {
  return (
    <div className="flex items-center justify-center min-h-12 bg-nin_cardbg p-3 ">
      <div className="flex text-center justify-center md:w-[96%] mx-4 md:mx-auto max-w-[90rem]">
        <div className="flex items mx-0 md:px-4 lg:border-r-[1px] lg:border-[#969696] lg:border-solid">
          <ReactSVG src={ShippingTruckIcon} className="mr-3 text-nin_red" />
          <span className="text-base">
            <b>Free shipping</b> on orders $50 or more.{" "}
            <a href="#" className="text-sm underline">
              Restrictions apply
            </a>
          </span>
        </div>
        <div className="hidden lg:flex items-center px-0 md:px-4">
          <ReactSVG src={NintendoPointsIcon} className="mr-3 text-nin_red" />
          <span className="text-base ">
            Earn{" "}
            <b>
              {" "}
              <a href="#" className="underline">
                My Nintendo Points
              </a>
            </b>{" "}
            on digital games
          </span>
        </div>
      </div>
    </div>
  );
};

export default LowerHeaderBar;
