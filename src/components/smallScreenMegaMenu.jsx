import React from "react";
import CloseButton from "./common/closeButton";
import SmallScreenMenuListRows from "./smallScreenMenuListRows";
import SupportIcon from "../assets/icons/SupportIcon.svg";

const SmallScreenMegaMenu = ({ onClose, isOpen, onClickElement, elements }) => {
  const helpfull = [
    { icon: SupportIcon, text: "Support" },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png",
      text: "Change Region",
    },
  ];
  return (
    <div
      className={
        isOpen
          ? "h-[60vh] block fixed bottom-12  w-[440px] z-30 shadow-2xl bg-white border-b-[1px] border-solid border-[#efefef] rounded-t-2xl left-1/2 -translate-x-[50%] overflow-hidden "
          : "hidden"
      }
    >
      <div className="relative flex items-center content-center justify-center w-full h-16 border-b-[1px] border-solid border-nin_breadcrumbs">
        <h2 className="my-0 text-xl font-bold  ">Menu</h2>
        <div className="absolute right-1 -translate-x-[50%]">
          <CloseButton
            onClick={onClose}
            className="w-[26px] h-[26px] "
            iconClass="w-4"
          />
        </div>
      </div>
      <div className="h-[calc(-4rem+60vh)] overflow-y-scroll pb-12 bg-[#efefef]">
        {elements.map((item) => (
          <SmallScreenMenuListRows
            item={item}
            icon={item.icon}
            text={item.text}
            isDropdown={item.isDropdown}
            onClick={onClickElement}
          />
        ))}
        <div className="mt-4">
          {helpfull.map((item) => (
            <SmallScreenMenuListRows
              icon={item.icon}
              image={item.image}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallScreenMegaMenu;
