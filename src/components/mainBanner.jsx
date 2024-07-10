import React from "react";
import ImagesSlider from "./imagesSlider";
import { FlowbiteCarousel } from "./flowbite/flowbiteCarousel";
import { FlowbiteBreadcrumbs } from "./flowbite/flowbiteBreadcrumbs";
import Favorite from "./common/favorite";
import Button from "./common/button";
import Rating from "./common/rating";
import DownloadIcon from "../assets/icons/DownloadIcon.svg";

const MainBanner = ({ game, images, openLightbox }) => {
  return (
    <>
      <section className="block  bg-nin_lightblue relative w-full max-xl:pb-16 xl:py-8">
        <div className="container w-auto max-w-[1240px] mx-auto bg-white grid  md:grid-cols-[3/2] md:gap-x-8 gap-y-4  shadow-lg xl:rounded-2xl pt-4 max-md:pb-12 md:py-8 px-4 md:px-12 -mb-16 ">
          <div className="md:col-span-2">
            <FlowbiteBreadcrumbs currentPage={game.name} />
          </div>

          <div className="block w-full">
            <div className="block md:mx-auto ">
              <FlowbiteCarousel images={images} onClick={openLightbox} />
            </div>
            <div className="w-[700px] max-sm:w-[368px] md:w-[440px] lg:w-[700px] mt-3 md:mb-4">
              <ImagesSlider data={images} />
            </div>
            <div className="hidden md:block">
              <Rating />
            </div>
            <span className="block w-6 h-6"></span>
          </div>
          <div className="grid auto-rows-min md:p-0 w-full">
            <div className="flex items-start font-light	text-sm	items-center">
              <div className="h-4	mr-1.5 block w-0.5 bg-nin_red"></div>
              <p className="text-sm font-light">Nintendo Switch</p>
            </div>
            <span className="w-6 h-6"></span>
            <h1 className="font-bold text-[1.75rem]">{game.name}</h1>
            <span className="w-6 h-6"></span>
            <div className="flex flex-row	justify-between">
              <p className="font-bold text-[1.75rem]">${game.price}</p>
              <div>
                <Favorite className="-m-3" />
              </div>
            </div>
            <span className="w-6 h-6"></span>
            <div className="flex gap-2 items-center">
              <img
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png"
                alt=""
                width="24"
                height="24"
              />
              <div className="font-light text-xs">
                Eligible for up to <span className="font-bold	">75</span> Gold
                Points
              </div>
            </div>
            <span className="w-6 h-6"></span>
            <Button
              label="Direct download"
              className="text-xl w-full h-[64px]"
              icon={DownloadIcon}
              iconClass="mr-4"
            />
            <span className="w-5 h-5"></span>
            <div className="font-light text-xs">
              <p>
                This item will be sent to your system automatically after
                purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
