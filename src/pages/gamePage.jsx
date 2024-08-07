import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import MainBanner from "../components/mainBanner";
import Highlight from "./../components/highlight";
import Details from "../components/details";
import Online from "../components/online";
import Games from "../components/games";
import Rights from "../components/rights";
import Lightbox from "./../components/lightbox";
import Footer from "../components/footer";
import { getImages } from "./../data/images";
import { getGames, getGame } from "../data/games";
import { getProducts } from "../data/products";
import { rearrangeArray } from "../helpers/helpers-functions";
import { filterArray } from "../helpers/helpers-functions";

const GamePage = () => {
  const [games, setGames] = useState([]);
  const [products, setProducts] = useState([]);
  const [orderedImages, setOrderedImages] = useState([]);
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setGames(getGames());
    setProducts(getProducts());
  }, []);

  const gameId = id;
  const game = getGame(gameId);
  const images = getImages(game.name);
  const filteredGames = filterArray(game, games);

  const handleOpenLightbox = (index) => {
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
        closeLightbox={() => handleOpenLightbox(-1)}
      />
      <Header products={products} />
      <main className="mb-12 lg:mb-16">
        <MainBanner
          game={game}
          images={images}
          openLightbox={handleOpenLightbox}
        />
        <Highlight game={game} />
        <Details />
        <Online />
        <Games games={filteredGames} />
        <Rights />
      </main>
      <Footer />
    </>
  );
};

export default GamePage;
