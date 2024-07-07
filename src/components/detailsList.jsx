import React from "react";
import DetailsListRow from "./detailsListRow";
import CalenderIcon from "../assets/icons/CalenderIcon.svg";
import GroupIcon from "../assets/icons/GroupIcon.svg";
import DPadIcon from "../assets/icons/DPadIcon.svg";
import BuildingIcon from "../assets/icons/BuildingIcon.svg";
import GearIcon from "../assets/icons/GearIcon.svg";
import SwitchIcon from "../assets/icons/SwitchIcon.svg";
import StorageIcon from "../assets/icons/StorageIcon.svg";
import GlobeIcon from "../assets/icons/GlobeIcon.svg";

const DetailsList = ({
  date,
  players,
  genres,
  publisher,
  rating,
  modes,
  size,
  languages,
}) => {
  return (
    <div className="grid grid-cols-1 gap-0">
      <DetailsListRow img={CalenderIcon} title={"Release date"} text={date} />
      <DetailsListRow
        img={GroupIcon}
        title={"No. of players"}
        atext={players}
      />
      <DetailsListRow img={DPadIcon} title={"Genre"} atext={genres} />
      <DetailsListRow
        img={BuildingIcon}
        title={"Publisher"}
        atext={publisher}
      />
      <DetailsListRow img={GearIcon} title={"ESRB rating"} atext={rating} />
      <DetailsListRow
        img={SwitchIcon}
        title={"Supported play modes"}
        text={modes}
      />
      <DetailsListRow img={StorageIcon} title={"Game file size"} text={size} />
      <DetailsListRow
        img={GlobeIcon}
        title={"Supported languages"}
        text={languages}
      />
    </div>
  );
};

export default DetailsList;
