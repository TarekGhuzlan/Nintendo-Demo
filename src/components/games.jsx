import React, { useEffect, useState } from "react";
import GamesCard from "./gamesCard";
import { getGames } from "../data/games";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(getGames());
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={" bg-[--background-color] hover:bg-[--background-hover]"}
        style={{
          ...style,
          position: "absolute",
          top: "0px",
          margin: "0px",
          height: "100%",
          transition: "all 200ms ease-in-out 25ms",
          color: "{rgb(218, 218, 218)}",
          border: "none",
          cursor: "pointer",
          padding: "2.25rem",
          outlineOffset: "-2px",
          opacity: "1",
          transform: "translateZ(0px)",
          zIndex: "9",
          right: "0px",
          borderRadius: "0.75rem",
          boxSizing: "border-box",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={" bg-[--background-color] hover:bg-[--background-hover]"}
        style={{
          ...style,
          position: "absolute",
          top: "0px",
          margin: "0px",
          height: "100%",
          transition: "all 200ms ease-in-out 25ms",
          color: "{rgb(218, 218, 218)}",
          border: "none",
          cursor: "pointer",
          padding: "2.25rem",
          outlineOffset: "-2px",
          opacity: "1",
          transform: "translateZ(0px)",
          zIndex: "9",
          left: "0px",
          borderRadius: "0.75rem",
          boxSizing: "border-box",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.8,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-12 pb-4 relative w-full ">
        <div className="w-11/12	max-w-6xl mx-auto">
          <h2 className="text-[1.75rem] font-bold	leading-snug">
            More like this
          </h2>
          <span className="block w-4 min-w-4 h-4 min-h-4"></span>
          <div className=" justify-start mr-12 ml-4">
            <Slider {...settings}>
              {games.map((game, index) => (
                <div key={index} className="m-6 p-4">
                  <GamesCard {...game} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
