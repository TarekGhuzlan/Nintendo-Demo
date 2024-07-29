import React from "react";
import Favorite from "./common/favorite";

const ProductCard = ({ product }) => {
  return (
    <a className="flex flex-row relative opacity-100 ease-in-out duration-1000 group ">
      <div className="block w-full max-w-[8.8rem] aspect-video">
        <img src={product.image} alt="" />
      </div>
      <div className="flex flex-col justify-between my-2 mx-3 w-full">
        <h2 className="m-0 text-sm group-hover:text-nin_red">
          {product.title}
        </h2>
        <div className="flex flex-row justify-between items-end">
          <div className="flex items-start text-sm">
            <div
              className={
                product.type === "Hardware"
                  ? "h-4	mr-1.5 block w-0.5 bg-nin_blue"
                  : "h-4	mr-1.5 block w-0.5 bg-nin_red"
              }
            ></div>
            <span className="text-sm font-light">{product.type}</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 py-3 px-4">
        <Favorite className="w-8 -m-3" />
      </div>
    </a>
  );
};

export default ProductCard;
