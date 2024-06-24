import React from "react";
import "./App.css";
import Games from "./components/games";
import MainBanner from "./components/mainBanner";
import Highlight from "./components/highlight";

function App() {
  return (
    <>
      <MainBanner />
      <Highlight />
      <Games />
    </>
  );
}

export default App;
