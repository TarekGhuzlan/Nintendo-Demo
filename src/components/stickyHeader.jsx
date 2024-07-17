import React, { useEffect, useState } from "react";
import Button from "./common/button";
import DownloadIcon from "../assets/icons/DownloadIcon.svg";

const StickyHeader = () => {
  const [sticky, setSticky] = useState(false);

  const scroll = () => {
    if (window.scrollY > 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => {
      window.addEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div
      className={
        sticky ? " fixed top-0 w-full z-20 bg-[#EFEFEF] shadow-lg" : "hidden"
      }
    >
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-center items-center w-full lg:w-[96%] lg:max-w-[71.5rem] h-[64px]    ">
          <div className="flex justify-center items-center w-full ">
            <div className="flex w-full items-start lg:items-center h-[110px] lg:h-16 pt-4 lg:pt-0 justify-between ">
              <p className="hidden lg:block w-full text-lg font-bold">
                Stardew Valley
              </p>
              <div className="flex w-full items-center justify-between lg:justify-end px-4 lg:p-0">
                <div className="flex flex-col gap-y-1  lg:items-center lg:flex-row">
                  <span className="text-xs font-bold lg:mr-2 ">Digital</span>
                  <div className="flex flex-row items-center justify-between mr-4 relative">
                    <span className="relative text-base text-nin_darkgray font-bold ">
                      $14.99
                    </span>
                  </div>
                </div>
                <Button
                  label={"Direct download"}
                  className="text-base rounded-full w-min min-w-[11.25rem] md:min-w-[14rem] h-10 text-base px-4 "
                  icon={DownloadIcon}
                  iconClass="h-3.5 w-[14px] mr-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
