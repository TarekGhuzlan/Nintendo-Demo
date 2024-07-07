import React from "react";

import EveryonePlus from "../../assets/icons/EveryonePlus.svg";
import { ReactSVG } from "react-svg";

const Rating = () => {
  return (
    <a href="#" className="flex gap-3 items-center ">
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
    </a>
  );
};

export default Rating;
