import React from "react";
import { ReactSVG } from "react-svg";

const DetailsListRow = ({ icon, title, text, isLink }) => {
  return (
    <div className="grid grid-cols-[28px_1fr] md:grid-cols-[28px_1fr_2fr] items-start md:items-center border-y-[1px] py-4 px-2 gap-x-5 border-nin_breadcrumbs">
      <div className="row-[1/3]">
        <ReactSVG src={icon} />
      </div>
      <h3 className="font-bold text-lg">{title} </h3>
      <div className="flex items-center flex-wrap gap-2">
        {!isLink ? (
          <div className="font-thin"> {text} </div>
        ) : (
          text.map((x) => (
            <a
              href="#"
              className="underline text-nin_red hover:text-nin_hoverred font-bold text-base"
            >
              {x}
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default DetailsListRow;
