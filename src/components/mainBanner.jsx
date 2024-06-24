import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-[--background-main] relative w-full py-8 px-16">
      <div className="bg-white grid auto-cols-auto gap-4 gap-x-12 box-border shadow-lg rounded-lg  pt-8 pb-16 px-12 -mb-16">
        <div className="col-span-2 mb-4 ">
          <nav class="flex text-xs font-bold " aria-label="Breadcrumb">
            <ol class="inline-flex flex-row items-center  ">
              <li class="inline-flex items-center mr-1">
                <a
                  href="#"
                  class="inline-flex items-center text-[--breadcrumbs-color]"
                >
                  Store
                </a>
                <svg
                  class=" w-2.5 h-2 text-[--breadcrumbs-arrow] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </li>
              <li class="inline-flex items-center mr-1 text-[--breadcrumbs-color]">
                <a href="#" class="inline-flex items-center ">
                  Games
                </a>
                <svg
                  class=" w-2.5 h-2 text-[--breadcrumbs-arrow] ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <span class="ms-1 ">Flowbite</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="  ">
          <div className=" items-center mb-4">
            <img
              className="rounded-lg"
              src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
              alt=""
              width="658"
              height="370"
            />
          </div>
          <div className="font-light text-xs min-w-[120px] max-w-[352px]">
            <div className="pb-1 border-b border-solid border-[--price-color]">
              <p>
                Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                Gambling, Mild Language, Mild Blood
              </p>
            </div>
            <div className="pt-2">Users Interact</div>
          </div>
        </div>
        <div className="grid  auto-rows-min">
          <div className="flex items-start font-light	text-sm	">
            <div className="h-4	mr-1.5 block w-0.5 bg-[--vertical-color]"></div>
            <p className="text-sm font-light text-[--date-color]">
              Nintendo Switch
            </p>
          </div>
          <span className="w-6 h-6"></span>
          <h1 className="font-bold text-[1.75rem]">Stardew Valley</h1>
          <span className="w-6 h-6"></span>
          <div className="flex flex-row	justify-between">
            <p className="font-bold text-[1.75rem]">$14.99</p>
            <button className="material-symbols-outlined text-[--vertical-color] w-12	h-12 font-bold pt-1">
              favorite
            </button>
          </div>
          <span className="w-6 h-6"></span>
          <div className="flex gap-2 items-center">
            <img
              src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png"
              alt=""
              width="24"
              height="24"
            />
            <div className="font-light text-xs">
              Eligible for up to <span className="font-bold	">75</span> Gold
              Points
            </div>
          </div>
          <span className="w-6 h-6"></span>
          <button className="bg-[--vertical-color] w-[440px] h-[64px] rounded-xl flex items-center justify-center hover:scale-105 hover:bg-[--button-hover]">
            <div className="text-white flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24"
                role="presentation"
                alt=""
                data-testid="DownloadIcon"
                color="currentColor"
                size="24"
                className="mr-4"
              >
                <path
                  d="M4.3 19.4v5.3c0 .5.5.9 1 .9h21.4c.5 0 1-.5 1-.9v-5.3H32v6.3c-.2 2.2-2.1 4-4.4 4H4.2c-2.3 0-4.2-1.8-4.2-4v-6.3h4.3zM17.9 2.2v12.2l5-4.8 2.8 2.8-9.8 9.9L6 12.5l2.6-2.8 5.2 4.8V2.2h4.1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="font-bold text-xl	">Direct download</p>
            </div>
          </button>
          <span className="w-5 h-5"></span>
          <div className="font-light text-xs">
            <p>
              This item will be sent to your system automatically after
              purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
