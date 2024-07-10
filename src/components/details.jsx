import React from "react";
import DetailsList from "./detailsList";
import Rating from "./common/rating";
import IconCard from "./common/iconCard";
import TVIcon from "../assets/icons/TVIcon.svg";
import TabletopIcon from "../assets/icons/TabletopIcon.svg";
import HandheldIcon from "../assets/icons/HandheldIcon.svg";
import CalenderIcon from "../assets/icons/CalenderIcon.svg";
import GroupIcon from "../assets/icons/GroupIcon.svg";
import DPadIcon from "../assets/icons/DPadIcon.svg";
import BuildingIcon from "../assets/icons/BuildingIcon.svg";
import GearIcon from "../assets/icons/GearIcon.svg";
import SwitchIcon from "../assets/icons/SwitchIcon.svg";
import StorageIcon from "../assets/icons/StorageIcon.svg";
import GlobeIcon from "../assets/icons/GlobeIcon.svg";

const Details = () => {
  const modesIcons = [
    { icon: TVIcon, label: "TV" },
    { icon: TabletopIcon, label: "Tabletop" },
    { icon: HandheldIcon, label: "HandheldIcon" },
  ];

  const detailsInfo = [
    {
      icon: CalenderIcon,
      title: "Release date",
      text: ["October 5, 2017"],
      isLink: false,
    },
    {
      icon: GroupIcon,
      title: "No. of players",
      text: ["Single System (1)", "Local wireless (1)", "Online (1-4)"],
      isLink: false,
    },
    {
      icon: DPadIcon,
      title: "Genre",
      text: ["Role-playing", "Simulation"],
      isLink: true,
    },
    {
      icon: BuildingIcon,
      title: "Publisher",
      text: ["ConcernedApe"],
      isLink: true,
    },
    {
      icon: GearIcon,
      title: "ESRB rating",
      text: ["Everyone 10+"],
      isLink: true,
    },
    {
      icon: SwitchIcon,
      title: "Supported play modes",
      text: ["TV mode, Tabletop mode, Handheld mode"],
      isLink: false,
    },
    {
      icon: StorageIcon,
      title: "Game file size",
      text: ["1.5 GB"],
      isLink: false,
    },
    {
      icon: GlobeIcon,
      title: "Supported languages",
      text: [
        "English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese",
      ],
      isLink: false,
    },
  ];
  return (
    <section className=" py-8 md:py-12 w-full scroll-mt-[120px]">
      <div className="container w-[96%] max-w-[71.5rem] mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full flex flex-col gap-4 items-center py-6 px-8 rounded-2xl bg-nin_cardbg shadow-none border-0">
            <h2 className="text-base font-bold text-center">ESRB rating</h2>
            <div className="py-4 px-8 bg-white shadow-lg mb-4 rounded-xl">
              <Rating />
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 items-center py-5 px-8 rounded-2xl bg-nin_cardbg shadow-none border-0">
            <h2 className="text-base font-bold text-center">
              Supported play modes
            </h2>
            <div className="grid grid-cols-3 gap-6 w-full ">
              {modesIcons.map((item) => (
                <IconCard icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>
        </div>

        <div className="my-8">
          <DetailsList info={detailsInfo} />
        </div>
      </div>
    </section>
  );
};

export default Details;
