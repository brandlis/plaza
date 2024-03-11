import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";
import Copropiedad from "../pages/Copropiedad";
import Contacto from "../pages/Contacto";

export default function RootStack() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/copropiedad" element={<Copropiedad />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
