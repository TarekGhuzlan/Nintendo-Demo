import React from "react";
import { ReactSVG } from "react-svg";

const IconCard = ({ icon, label, imgVariant, variant }) => {
  return (
    <div className=" justify-center text-center w-full">
      <div
        className={
          variant
            ? "grid justify-center items-center text-nin_darkgray border-[1px] h-[4.25rem]  mb-2 rounded-xl bg-white group-hover:text-white group-hover:bg-nin_red ease-in-out duration-200"
            : "grid bg-nin_darkgray text-white  shadow-lg rounded-xl justify-center p-4 "
        }
      >
        {imgVariant ? (
          <img
            src={icon}
            alt=""
            className="w-auto max-w-full h-auto max-h-full p-0"
          />
        ) : (
          <ReactSVG src={icon} className={variant ? "w-[42px]" : ""} />
        )}
      </div>
      <p
        className={
          variant
            ? "text-sm font-light m-0 group-hover:text-nin_red ease-in-out duration-200"
            : "text-base my-4"
        }
      >
        {label}
      </p>
    </div>
  );
};

export default IconCard;
