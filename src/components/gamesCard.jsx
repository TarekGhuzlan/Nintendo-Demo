import React from "react";

const GamesCard = ({ image, name, date, price }) => {
  return (
    <div className="group w-64 basis-[16.375rem] h-full bg-white border border-solid border-[--border-color] rounded-xl">
      <a href="#">
        <div className="duration-300	group-hover:-translate-y-4">
          <img
            className="rounded-t-xl h-auto relative grow  "
            src={image}
            alt=""
          />
        </div>

        <div className="pt-4 sticky">
          <div className="px-4 flex flex-col h-full justify-between text-[--card-color]">
            <div className="block mb-4 ">
              <div className="m-0	text-base font-bold	group-hover:text-[--vertical-color]">
                {name}
              </div>
              <div className="mt-1 text-xs text-[--date-color]"> {date} </div>
            </div>
            <div className="flex mb-2 h-6 items-center">
              <p className="flex flex-row items-center relative transition-opacity text-base font-bold ">
                {price}
              </p>
            </div>
            <div className="grid mb-4 h-6 grid-cols-2">
              <div className="flex items-start font-light	text-sm	">
                <div className="h-4	mr-1.5 block w-0.5 bg-[--vertical-color]"></div>
                <p className="text-sm font-light text-[--date-color]">
                  Nintendo Switch
                </p>
              </div>
              <div className=" pl-20		">
                <span className="material-symbols-outlined text-[--vertical-color] text-2xl font-bold">
                  favorite
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GamesCard;
