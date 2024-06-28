"use client";

import { Flowbite, Carousel } from "flowbite-react";

const customTheme = {
  carousel: {
    control: {
      base: "inline-flex h-20 w-20 items-center justify-center ",
      icon: "text-transparent  sm:h-6 sm:w-6 group-hover:text-white group-hover:scale-[2.5] ease-in-out	duration-500",
    },
  },
};

export function FlowbiteCarousel({ images, onClick }) {
  return (
    <div className="h-[370px] w-[658px] group">
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel slide={false} indicators={false}>
          {images.map((image, index) => (
            <img
              key={image._id}
              src={image.big_image}
              alt="..."
              onClick={() => onClick(index++)}
              className="rounded-2xl"
            />
          ))}
        </Carousel>
      </Flowbite>
    </div>
  );
}
