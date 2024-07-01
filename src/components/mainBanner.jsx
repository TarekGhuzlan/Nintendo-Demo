import React from "react";
import ImagesSlider from "./imagesSlider";
import { FlowbiteCarousel } from "./flowbite/flowbiteCarousel";
import { FlowbiteBreadcrumbs } from "./flowbite/flowbiteBreadcrumbs";
import Favorite from "./common/favorite";
import Button from "./common/button";
import DownloadIcon from "../assets/icons/DownloadIcon.svg";
import EveryonePlus from "../assets/icons/EveryonePlus.svg";
import { ReactSVG } from "react-svg";

const MainBanner = ({ game, images, openLightbox }) => {
  return (
    <>
      <div className=" bg-nin_lightblue relative w-full py-8">
        <div className="container w-auto max-w-screen-xl mx-auto bg-white grid  auto-cols-auto gap-4 -gap-x-2 box-border shadow-lg rounded-2xl  py-8  px-12 -mb-16">
          <div className="col-span-2  ">
            <FlowbiteBreadcrumbs currentPage={game.name} />
          </div>

          <div>
            <div>
              <FlowbiteCarousel images={images} onClick={openLightbox} />
            </div>
            <div className=" mt-3 mb-4 max-w-[650px]">
              <ImagesSlider data={images} />
            </div>

            <div className="flex gap-3 items-center">
              <div>
                <ReactSVG src={EveryonePlus} alt="" />
              </div>
              <div className="font-light text-xs min-w-[120px] max-w-[352px]">
                <div className="pb-1 border-b border-solid border-nin_lightgray">
                  <p>
                    Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                    Gambling, Mild Language, Mild Blood
                  </p>
                </div>
                <div className="pt-2">Users Interact</div>
              </div>
            </div>
            <span className="block w-6 h-6"></span>
          </div>
          <div className="grid  auto-rows-min ">
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
                <Favorite />
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
              className="text-xl w-[440px] h-[64px]"
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
      </div>
    </>
  );
};

export default MainBanner;
