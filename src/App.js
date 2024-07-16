import React from "react";
import "./App.css";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/gamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/store/products/9" />} />
        <Route path="/store/products/:id" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
