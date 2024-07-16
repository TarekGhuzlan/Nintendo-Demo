import React from "react";
import { ReactSVG } from "react-svg";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon.svg";

const IconTextButton = ({ elements }) => {
  return (
    <div className="flex gap-4 pt-0.5 pb-2">
      {elements.map((element) => {
        if (element.isDropdown) {
          return (
            <button className="relative pt-3 pb-1 mx-3 hover:text-nin_red duration-200 ease-in-out first:text-nin_red first:border-b-[5px] border-solid first:border-nin_red">
              <div className="inline-flex items-center ">
                <span className="flex items-center justify-center mr-1.5">
                  <ReactSVG src={element.icon} className="w-4" />
                </span>
                <span className="text-sm font-bold ">{element.text}</span>

                <span className="inline-flex justify-center items-center  ml-2">
                  <ReactSVG src={ChevronDownIcon} />
                </span>
              </div>
            </button>
          );
        } else {
          return (
            <button className="relative pt-3 mx-3 hover:text-nin_red duration-200 ease-in-out first:text-nin_red first:border-b-[5px] border-solid first:border-nin_red">
              <div className="inline-flex items-center ">
                <span className="flex items-center justify-center mr-1.5">
                  <ReactSVG src={element.icon} className="w-4" />
                </span>
                <span className="text-sm font-bold ">{element.text}</span>
              </div>
            </button>
          );
        }
      })}
    </div>
  );
};

export default IconTextButton;
