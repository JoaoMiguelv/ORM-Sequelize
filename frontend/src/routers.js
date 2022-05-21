import React from "react";
import Geral from './components/Geral/Geral.js';
import Categorias from './components/Categorias/Categorias.js';
import { Route, Routes } from "react-router-dom";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Geral />} />
      <Route path="/categorias" element={<Categorias />} />
    </Routes>
  );
}

export default Routers;