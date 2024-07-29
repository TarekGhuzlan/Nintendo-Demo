import React from "react";
import CloseButton from "./common/closeButton";
import SmallScreenMenuListRows from "./smallScreenMenuListRows";

const SmallScreenDetailsList = ({ onClose, isOpen, element }) => {
  if (Object.keys(element).length > 0) {
    return (
      <div
        className={
          isOpen
            ? "h-[60vh] block fixed bottom-12  w-[440px] z-40 shadow-2xl bg-white border-b-[1px] border-solid border-[#efefef] rounded-t-2xl left-1/2 -translate-x-[50%] overflow-hidden "
            : "hidden"
        }
      >
        <div className="relative flex items-center content-center justify-center w-full h-16 border-b-[1px] border-solid border-nin_breadcrumbs">
          <h2 className="my-0 text-xl font-bold  ">{element.text}</h2>
          <div className="absolute right-1 -translate-x-[50%]">
            <CloseButton
              onClick={onClose}
              className="w-[26px] h-[26px] "
              iconClass="w-4"
            />
          </div>
        </div>
        <div className="h-[calc(-4rem+60vh)] overflow-y-scroll pb-12 bg-[#efefef]">
          {element.options.map((item) => (
            <SmallScreenMenuListRows text={item.label} list={item.list} />
          ))}
        </div>
      </div>
    );
  }
};

export default SmallScreenDetailsList;
