import React from "react";
import Button from "./common/button";
import OnlineIcon from "../assets/icons/OnlineIcon.svg";
import { ReactSVG } from "react-svg";

const Online = () => {
  return (
    <section className="py-8 md:py-12 w-full scroll-mt-[120px]">
      <div className="container md:w-[96%] mx-4 md:mx-auto max-w-[71.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] p-8 md:py-0 bg-nin_cardbg rounded-2xl items-center">
          <div className="flex flex-col gap-6">
            <ReactSVG src={OnlineIcon} />
            <p className="font-bold text-[1.3125rem]">
              Play online, access classic NES™ and Super NES™ games, and more
              with a Nintendo Switch Online membership.
            </p>
            <p className="font-bold text-base">
              This game supports:
              <a className="font-bold text-base mx-2 underline text-nin_red hover:text-nin_hoverred">
                Online Play
              </a>
              <a className="font-bold text-base mx-2 underline text-nin_red hover:text-nin_hoverred">
                Save Data Cloud
              </a>
            </p>
            <Button label={"Learn more"} className="h-12 px-6 w-fit" />
          </div>
          <div className="w-full relative">
            <img
              src="https://assets.nintendo.com/image/upload/f_auto,q_auto/v1605147657/ncom/en_US/merchandising/curated list/Games for core gamers/Pro-Controller-Hands.png"
              alt=""
              className="hidden md:block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online;
