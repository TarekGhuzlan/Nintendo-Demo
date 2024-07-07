import React from "react";

const Rights = () => {
  return (
    <section className=" py-8 md:py-12 w-full relative scroll-mt-[120px]">
      <div className="container max-w-[71.5rem] mx-4 md:mx-auto md:w-[96%]">
        <p className="text-xs font-light">
          WARNING: If you have epilepsy or have had seizures or other unusual
          reactions to flashing lights or patterns, consult a doctor before
          playing video games. All users should read the Health and Safety
          Information available in the system settings before using this
          software.
        </p>
        <div>
          <p className="text-base md:text-xs font-light"></p>
          <p className="text-base md:text-xs font-light my-3">
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            <a href="#">nintendo.com/switch-online</a>
          </p>
          <p className="text-base md:text-xs font-light"></p>
          <p className="text-base md:text-xs font-light">
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rights;
