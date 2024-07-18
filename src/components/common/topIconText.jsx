import React from "react";
import { ReactSVG } from "react-svg";

const TopIconText = ({ icon, text }) => {
  return (
    <a
      href="#"
      className=" inline-flex items-center hover:text-nin_red duration-200 delay-0 ease-in-out"
    >
      <span className="inline-flex content-center items-center mr-1.5">
        <ReactSVG src={icon} className="w-4" />
      </span>
      <span className="font-bold text-sm">{text}</span>
    </a>
  );
};

export default TopIconText;
