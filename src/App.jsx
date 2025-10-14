import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home/Home";
import Characters from "./Pages/Characters/Characters";
import CharacterDetail from "./Pages/CharacterDetail/CharacterDetail";
import Locations from "./Pages/Locations/Locations";
import Episodes from "./Pages/Episodes/Episodes";
import './App.css'

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Characters />} />
        <Route path="/personaje/:id" element={<CharacterDetail />} />
        <Route path="/lugares" element={<Locations />} />
        <Route path="/episodios" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

