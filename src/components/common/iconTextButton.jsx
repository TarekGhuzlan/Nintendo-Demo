import React from "react";
import TopIconText from "./topIconText";
import { ReactSVG } from "react-svg";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon.svg";

const IconTextButton = ({ icon, text, isDropdown, onClick }) => {
  return (
    <button
      className="relative pt-3 pb-1 mx-3 hover:text-nin_red duration-200 ease-in-out first:text-nin_red first:border-b-[5px] border-solid first:border-nin_red"
      onClick={onClick}
    >
      <div className="inline-flex items-center ">
        <TopIconText icon={icon} text={text} />

        <span
          className={
            isDropdown
              ? "inline-flex justify-center items-center  ml-2"
              : "hidden"
          }
        >
          <ReactSVG src={ChevronDownIcon} />
        </span>
      </div>
    </button>
  );
};

export default IconTextButton;
