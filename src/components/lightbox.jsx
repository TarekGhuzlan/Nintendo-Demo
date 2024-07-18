import React from "react";
import { FlowbiteCarousel } from "./flowbite/flowbiteCarousel";
import CloseButton from "./common/closeButton";

const Lightbox = ({ images, open, closeLightbox }) => {
  if (open) {
    return (
      <div className=" fixed z-[110] bg-black/60 backdrop-blur-lg w-full h-full ease-in-out duration-500 inline-flex items-center justify-center">
        <div className="block relative">
          <CloseButton
            className="absolute top-1 right-1 z-10 w-12 h-12"
            onClick={closeLightbox}
            iconClass="w-[26px]"
          />
          <FlowbiteCarousel images={images} />
        </div>
      </div>
    );
  }
};

export default Lightbox;
