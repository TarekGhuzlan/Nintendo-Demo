import React from "react";
import { ReactSVG } from "react-svg";

const IconCard = ({ icon, label }) => {
  return (
    <div className=" justify-center text-center w-full">
      <div className="grid bg-nin_darkgray shadow-lg rounded-xl justify-center p-4 ">
        <ReactSVG src={icon} className="text-white " />
      </div>
      <p className="text-base my-4">{label}</p>
    </div>
  );
};

export default IconCard;
