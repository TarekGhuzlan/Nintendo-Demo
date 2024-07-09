import React from "react";
import { FlowbiteCarousel } from "./flowbite/flowbiteCarousel";
import XIcon from "../assets/icons/XIcon.svg";
import { ReactSVG } from "react-svg";

const Lightbox = ({ images, open, closeLightbox }) => {
  if (open) {
    return (
      <div className=" fixed z-50 bg-black/60 backdrop-blur-lg w-full h-full ease-in-out duration-500 inline-flex items-center justify-center">
        <div className="block relative">
          <button className="absolute top-1 right-1 z-10 w-12 h-12 bg-nin_slider rounded-[3rem] flex items-center justify-center">
            <ReactSVG
              src={XIcon}
              alt=""
              onClick={() => {
                closeLightbox(false);
              }}
              className="text-white"
            />
          </button>
          <FlowbiteCarousel images={images} />
        </div>
      </div>
    );
  }
};

export default Lightbox;
