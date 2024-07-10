import React from "react";
import DetailsListRow from "./detailsListRow";

const DetailsList = ({ info }) => {
  return (
    <div className="grid grid-cols-1 gap-0">
      {info.map((element) => (
        <DetailsListRow
          icon={element.icon}
          title={element.title}
          text={element.text}
          isLink={element.isLink}
        />
      ))}
    </div>
  );
};

export default DetailsList;
