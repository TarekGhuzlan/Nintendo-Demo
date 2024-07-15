import React from "react";
import { ReactSVG } from "react-svg";

const TopIconText = ({ elements }) => {
  return (
    <>
      {elements.map((e) => (
        <a
          href="#"
          className="py-3.5 inline-flex items-center hover:text-nin_red duration-200 delay-0 ease-in-out"
        >
          <span className="inline-flex content-center items-center mr-1.5">
            <ReactSVG src={e.icon} />
          </span>
          <span className="font-bold text-sm">{e.text}</span>
        </a>
      ))}
    </>
  );
};

export default TopIconText;
