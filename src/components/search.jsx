import React from "react";
import { ReactSVG } from "react-svg";
import { FlowbiteInlineDropdown } from "./flowbite/flowbiteInlineDropdown";
import SearchIcon from "../assets/icons/SearchIcon.svg";

const Search = ({ placeHolder, onClick }) => {
  const categories = [
    "All categories",
    "Games",
    "Hardware",
    "Merchandise",
    "News & Events",
    "Support",
  ];
  return (
    <form
      className="lg:max-w-[28.125rem] lg:text-sm flex items-center justify-between border-b-[1px] border-b-nin_darkgray h-[2.125rem] w-full hover:border-nin_red duration-200 delay-0 ease-in-out cursor-pointer	"
      onClick={onClick}
    >
      <span className="w-full">
        <a className="flex items-center text-nin_lightgray h-full w-full leading-6 hover:text-nin_red duration-200 delay-0 ease-in-out">
          <ReactSVG src={SearchIcon} className="mr-2.5 w-[18px]" />
          <span className="truncate ">{placeHolder}</span>
        </a>
      </span>
      <div className="relative lg:inline-block basis-[140px] shrink-0 text-xs">
        <div className="flex font-bold">
          <div className="grid pl-2 pr-1 py-0.5 items-center relative">
            <div>
              <FlowbiteInlineDropdown options={categories} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
