import React from "react";
import CloseButton from "./common/closeButton";
import IconCard from "./common/iconCard";

const MegaMenu = ({ isOpen, options, onClick }) => {
  return (
    <div
      className={
        isOpen && options.length > 0
          ? "absolute top-24 left-0 w-full z-50 bg-white h-auto overflow-hidden shadow-lg "
          : "hidden"
      }
    >
      <div className="flex flex-col pt-2 pb-3">
        <div className="flex justify-end pr-4 pb-1">
          <CloseButton
            onClick={onClick}
            className="w-[26px] h-[26px]"
            iconClass="w-[13px]"
          />
        </div>
        <div className="flex justify-center gap-7 px-4 max-w-[1440px] mx-auto">
          {options.map((element) => (
            <a href="#" className="w-[120px] group ">
              <IconCard
                icon={element.icon}
                label={element.label}
                variant={true}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
