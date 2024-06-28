import React from "react";
import "./App.css";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/gamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/games/9" />} />
        <Route path="/games/" element={<Navigate to="/games/9" />} />
        <Route path="/games/:id" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
