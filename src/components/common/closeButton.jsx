import React from "react";
import { ReactSVG } from "react-svg";
import XIcon from "../../assets/icons/XIcon.svg";

const CloseButton = ({ onClick, className, iconClass }) => {
  return (
    <button
      className={`${className} bg-nin_slider hover:bg-nin_sliderhover ease-in-out du rounded-[3rem] flex items-center justify-center`}
    >
      <ReactSVG
        src={XIcon}
        alt=""
        onClick={onClick}
        className={`${iconClass} text-white`}
      />
    </button>
  );
};

export default CloseButton;
