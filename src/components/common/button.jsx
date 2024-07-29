import React from "react";
import { ReactSVG } from "react-svg";

const Button = ({ label, className, icon, iconClass, labelClass }) => {
  return (
    <button
      className={`${className}  font-bold bg-nin_red text-white flex items-center justify-center hover:scale-105 hover:bg-nin_hoverred ease-in-out duration-200 delay-100`}
    >
      <ReactSVG src={icon} alt="" className={iconClass} />
      <span className={labelClass}>{label}</span>
    </button>
  );
};

export default Button;
