import React from "react";

const Favorite = ({ className }) => {
  return (
    <button className="text-3xl">
      <svg
        viewBox="0 0 54 54"
        fill="currentColor"
        stroke="currentColor"
        width="48"
        role="presentation"
        alt=""
        data-testid="heartspark"
        color="currentColor"
        size="48"
        className={`${className} fill-nin_red hover:fill-nin_hoverred font-black stroke-transparent hover:animate-changeStroke delay-0 ease-in-out duration-200`}
      >
        <g class="hearts">
          <path
            class="heart heart-outline"
            d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"
          ></path>
        </g>
        <g class="sparks">
          <path class="spark" d="M27 8V0M27 46v8" stroke-width="2"></path>
          <path
            class="spark"
            d="M41.171 12.828l5.657-5.657M12.829 12.828L7.171 7.172"
            stroke-width="1.99998"
          ></path>
          <path class="spark" d="M46 27h8M8 27H0" stroke-width="2"></path>
          <path
            class="spark"
            d="M41.172 41.172l5.657 5.656M12.829 41.171l-5.657 5.657"
            stroke-width="1.99998"
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default Favorite;
