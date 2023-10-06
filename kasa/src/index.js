import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/global.scss";

document.title = "Kasa";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/fiche-de-logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
