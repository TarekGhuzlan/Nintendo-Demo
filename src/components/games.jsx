import React from "react";

import CardsSlider from "./cardsSlider";

const Games = ({ games }) => {
  return (
    <section className=" pt-8 md:pt-12 pb-4 relative w-full scroll-mt-[120px]">
      <div className="container mx-4 md:mx-auto max-w-[71.5rem] md:w-[96%]">
        <h2 className="text-[1.75rem] font-bold	leading-snug">More like this</h2>
        <span className="block w-4 min-w-4 h-4 min-h-4"></span>
        <div className=" justify-start">
          <CardsSlider data={games} />
        </div>
      </div>
    </section>
  );
};

export default Games;
