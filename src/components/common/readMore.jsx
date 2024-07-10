import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import MinusIcon from "../../assets/icons/MinusIcon.svg";

const ReadMore = ({ text, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpande = () => {
    setIsExpanded(!isExpanded);
  };

  const getButton = () => {
    if (isExpanded) {
      return (
        <>
          <p>{text}</p>
          <button
            className="border-4 border-transparent py-2 pr-2"
            onClick={handleExpande}
          >
            <span className="font-bold inline-flex items-center text-nin_red hover:text-nin_hoverred">
              <ReactSVG src={MinusIcon} className="pr-2 w-4.5" />
              <p className="pt-0.5">Read less</p>
            </span>
          </button>
        </>
      );
    }
    return (
      <>
        <p className={className}>{text} </p>
        <button
          className="border-4 border-transparent py-2 pr-2"
          onClick={handleExpande}
        >
          <span className="font-bold inline-flex items-center text-nin_red hover:text-nin_hoverred">
            <ReactSVG src={PlusIcon} className="pr-2 w-4.5" />
            <p className="pt-0.5">Read more</p>
          </span>
        </button>
      </>
    );
  };

  return getButton();
};

export default ReadMore;
