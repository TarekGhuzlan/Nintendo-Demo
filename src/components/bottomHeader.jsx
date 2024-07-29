import React from "react";
import IconTextButton from "./common/iconTextButton";

const BottomHeader = ({ onClick, elements }) => {
  return (
    <div className="relative z-10 ">
      <div className="flex relative justify-center items-center h-[44px] border-b-[1px] border-b-nin_breadcrumbs z-[1]">
        <div className="flex gap-4 pt-0.5 pb-2">
          {elements.map((item) => (
            <IconTextButton
              icon={item.icon}
              text={item.text}
              isDropdown={item.isDropdown}
              onClick={() => onClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
