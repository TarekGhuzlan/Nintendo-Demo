import React, { useState } from "react";
import ChevronRightIcon from "../assets/icons/ChevronRightIcon.svg";
import { ReactSVG } from "react-svg";

const SmallScreenMenuListRows = ({
  item,
  icon,
  image,
  text,
  list,
  isDropdown,
  onClick,
}) => {
  const handleClick = () => {
    if (isDropdown) {
      onClick(item);
    } else if (list) {
      setSelectedList(list);
      setShowList(!showList);
    }
  };

  const [selectedlist, setSelectedList] = useState([]);
  const [showList, setShowList] = useState(false);
  return (
    <>
      <button
        className="flex items-center w-full h-[60px] border-y-[1px] border-solid bg-white border-nin_breadcrumbs -mt-[1px] font-bold px-6 hover:text-nin_red ease-in-out duration-200"
        onClick={handleClick}
      >
        <div
          className={
            icon || image
              ? "inline-flex mr-2 text-nin_red h-full items-center"
              : "hidden"
          }
        >
          {icon ? (
            <ReactSVG src={icon} className="w-[18px]" />
          ) : (
            <img src={image} alt="" />
          )}
        </div>
        <span className="flex-grow flex-shrink basis-auto text-left">
          {text}
        </span>
        <div className={isDropdown ? "" : "hidden"}>
          <ReactSVG src={ChevronRightIcon} />
        </div>
        <div className={list ? "" : "hidden"}>
          <ReactSVG src={ChevronRightIcon} className="rotate-90" />
        </div>
      </button>
      {showList ? (
        <div className="overflow-y-hidden h-auto max-h-[185px] ">
          <div className="my-4">
            {selectedlist.map((i) => (
              <a
                href=""
                className="flex items-center pl-8 pr-4 h-[38px] font-light hover:text-nin_red"
              >
                {i}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SmallScreenMenuListRows;
