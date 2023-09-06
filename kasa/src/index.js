// Importation des dépendances
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import "./styles/global.scss";

// Création d'un style global avec styled-components
const LayoutStyle = createGlobalStyle``;

// Définition du titre du document
document.title = "Kasa";

// Obtention de l'élément racine de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application React
root.render(
  <React.StrictMode>
    {/* Configuration du router */}
    <Router>
      {/* Application du style global */}
      <LayoutStyle />

      {/* Composant de l'en-tête */}
      <Header />

      {/* Définition des routes */}
      <Routes>
        {/* Lorsque l'URL correspond à "/", le composant Home est rendu */}
        <Route path="/" element={<Home />} />

        {/* Lorsque l'URL correspond à "/a-propos", le composant APropos est rendu */}
        <Route path="/a-propos" element={<APropos />} />

        {/* Lorsque l'URL correspond à "/fiche-de-logement/:id", le composant FicheLogement est rendu */}
        <Route path="/fiche-de-logement/:id" element={<FicheLogement />} />

        {/* En cas de correspondance d'URL invalide, le composant Error404 est rendu */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* Composant du pied de page */}
      <Footer />
    </Router>
  </React.StrictMode>
);
