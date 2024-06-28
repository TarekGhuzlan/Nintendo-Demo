import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./common/favorite";

const GamesCard = ({ _id, name, price, date, image }) => {
  return (
    <div className="group mx-5 my-6 basis-[16.375rem] h-full bg-white border border-solid  rounded-2xl">
      <Link to={`/games/${_id}`} reloadDocument>
        <div className="duration-300	group-hover:-translate-y-4">
          <img
            className="rounded-2xl h-auto relative grow  "
            src={image}
            alt=""
          />
        </div>

        <div className="pt-4 sticky">
          <div className="px-4 flex flex-col h-full justify-between text-nin_darkgray">
            <div className="block mb-4 h-16">
              <div className="m-0	text-base font-bold	group-hover:text-nin_red">
                {name}
              </div>
              <div className="mt-1 text-xs text-nin_lightgray"> {date} </div>
            </div>
            <div className="flex mb-2 h-6 items-center">
              <p className="flex flex-row items-center relative transition-opacity text-base font-bold ">
                ${price}
              </p>
            </div>
            <div className="grid mb-4 h-6 grid-cols-2 grid-flow-col items-start ">
              <div className="flex items-start font-light	text-sm	items-center">
                <div className="h-4	mr-1.5 block w-0.5 bg-nin_red"></div>
                <p className="text-sm font-light ">Nintendo Switch</p>
              </div>
              <div className="text-right px-4 pb-4 ">
                <Favorite className="w-6 -m-3" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GamesCard;
