import React from "react";
import Search from "./search";
import ProductCard from "./productCard";
import TopNintendoIcon from "./common/topNintendoIcon";
import CloseButton from "./common/closeButton";

const SearchSection = ({ isOpen, products, onClick }) => {
  const trending = [
    "Nintendo Switch™ - OLED Model: Mario Red Edition",
    "Nintendo Switch",
    "Super Mario Bros. Wonder",
    "Nintendo Switch games",
    "Zelda games",
  ];
  return (
    <div
      className={
        isOpen
          ? "block z-[110] top-0 w-full fixed overflow-hidden lg:pr-4 h-full lg:h-[37rem] xl:h-[21.75rem] bg-white shadow-lg"
          : "hidden"
      }
    >
      <div className="flex md:justify-between md:p-0 h-11 md:h-[3.25rem] items-center gap-4 max-lg:mx-4">
        <span className="max-lg:hidden">
          <TopNintendoIcon />
        </span>
        <Search placeHolder={"Search games, hardware, news, etc"} />
        <CloseButton
          className=" lg:ml-auto w-6 h-6 bg-nin_sliderhover"
          iconClass="w-3 h-3"
          onClick={onClick}
        />
      </div>
      <div className="min-h-full py-0 px-4 lg:min-h-[17.5rem] lg:pt-3 lg:pb-10 lg:px-[7.5rem]">
        <div className="grid py-4 px-0 xl:gap-x-10 xl:grid-cols-[2fr_1fr] xl:p-0">
          <div>
            <h2 className="mt-0 mb-6 text-2xl md:text-base md:mb-3 ">
              Trending topics
            </h2>
            <div className="flex flex-col mb-6 xl:mb-0">
              {trending.map((topic) => (
                <a
                  href=""
                  className="text-base font-bold mb-6 md:mb-2 text-nin_red hover:text-nin_red ease-in-out duration-200"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mt-0 mb-6 text-2xl md:text-base md:mb-3 ">
              Top store products
            </h2>
            <div className="grid gap-6 auto-rows-auto grid-cols-[minmax(auto,343px)] md:grid-cols-[repeat(2,minmax(auto,343px))] mb-6">
              {products.map((product) => (
                <div className="w-[340px] text-nin_darkgray relative overflow-hidden rounded-2xl border-[1px] border-solid border-nin_breadcrumbs">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
