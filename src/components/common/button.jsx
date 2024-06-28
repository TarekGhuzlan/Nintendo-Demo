import React from "react";
import { ReactSVG } from "react-svg";

const Button = ({ label, className, icon, iconClass }) => {
  return (
    <button
      className={`${className} text-white font-bold bg-nin_red rounded-xl flex items-center justify-center hover:scale-105 hover:bg-nin_hoverred ease-in-out duration-200`}
    >
      <ReactSVG src={icon} alt="" className={iconClass} />
      <span>{label}</span>
    </button>
  );
};

export default Button;
