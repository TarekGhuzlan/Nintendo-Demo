import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainBanner from "../components/mainBanner";
import Highlight from "./../components/highlight";
import Games from "../components/games";
import Lightbox from "./../components/lightbox";
import { getImages } from "./../data/images";
import { getGames, getGame } from "../data/games";
import { rearrangeArray } from "../helpers/helpers-functions";
import { filterArray } from "../helpers/helpers-functions";

const GamePage = () => {
  const [games, setGames] = useState([]);
  const [orderedImages, setOrderedImages] = useState([]);
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setGames(getGames());
  }, []);

  const gameId = id;
  const game = getGame(gameId);
  const images = getImages(game.name);
  const filteredGames = filterArray(game, games);

  const handleOpenLightbox = (index) => {
    console.log(index);
    if (index >= 0) {
      setOrderedImages(rearrangeArray(index, images));
      setOpen(true);
    } else {
      setOrderedImages([]);
      setOpen(false);
    }
  };

  return (
    <>
      <Lightbox
        images={orderedImages}
        open={open}
        className="overflow"
        closeLightbox={() => handleOpenLightbox(-1)}
      />

      <MainBanner
        game={game}
        images={images}
        openLightbox={handleOpenLightbox}
      />
      <Highlight game={game} />
      <Games games={filteredGames} />
    </>
  );
};

export default GamePage;
