import React from "react";

const Favorite = ({ className }) => {
  return (
    <button className="material-symbols-outlined text-nin_red font-bold hover:text-nin_hoverred">
      <span className={className}>favorite</span>
    </button>
  );
};

export default Favorite;
