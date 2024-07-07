import React from "react";
import DetailsList from "./detailsList";
import Rating from "./common/rating";
import { ReactSVG } from "react-svg";
import TVIcon from "../assets/icons/TVIcon.svg";
import TabletopIcon from "../assets/icons/TabletopIcon.svg";
import HandheldIcon from "../assets/icons/HandheldIcon.svg";

const Details = () => {
  return (
    <section className=" py-8 md:py-12 w-full scroll-mt-[120px]">
      <div className="container w-[96%] max-w-[71.5rem] mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full flex flex-col gap-4 items-center py-6 px-8 rounded-2xl bg-nin_cardbg shadow-none border-0">
            <h2 className="text-base font-bold text-center">ESRB rating</h2>
            <div className="py-4 px-8 bg-white shadow-lg mb-8 rounded-xl">
              <Rating />
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 items-center py-6 px-8 rounded-2xl bg-nin_cardbg shadow-none border-0">
            <h2 className="text-base font-bold text-center">
              Supported play modes
            </h2>
            <div className="grid grid-cols-3 gap-6 w-full ">
              <div className=" justify-center text-center w-full">
                <div className="grid bg-nin_darkgray shadow-lg rounded-xl justify-center p-4 ">
                  <ReactSVG src={TVIcon} className="text-white " />
                </div>
                <p className="text-base my-4">TV</p>
              </div>

              <div className=" justify-center text-center w-full">
                <div className="grid bg-nin_darkgray shadow-lg rounded-xl justify-center p-4 ">
                  <ReactSVG src={TabletopIcon} className="text-white " />
                </div>
                <p className="text-base my-4">Tabletop</p>
              </div>

              <div className=" justify-center text-center w-full">
                <div className="grid bg-nin_darkgray shadow-lg rounded-xl justify-center p-4 ">
                  <ReactSVG src={HandheldIcon} className="text-white " />
                </div>
                <p className="text-base my-4">Handheld</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <DetailsList
            date={"October 5, 2017"}
            players={[
              "Single System (1)",
              "Local wireless (1)",
              "Online (1-4)",
            ]}
            genres={["Role-playing", "Simulation"]}
            publisher={["ConcernedApe"]}
            rating={["Everyone 10+"]}
            modes={["TV mode, Tabletop mode, Handheld mode"]}
            size={["1.5 GB"]}
            languages={[
              "English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
