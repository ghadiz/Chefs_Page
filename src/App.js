import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import Categories from "./components/Categories";
import Gallery from "./components/Gallery";

import Chef from "./components/Chef";
import BreakfastList from "./components/BreakfastList";
import { Route, Routes } from "react-router-dom";
import "./Style.scss";
import RecipePage from "./components/RecipePage";
import SweetsList from "./components/SweetsList";

const Home = () => (
  <>
    <Header />
    {/* <Chef /> */}
    <div id="about">
      <Chef />
    </div>
    <div id="menu">
      <Categories />
    </div>
    <Gallery />
    <Routes>
      <Route path="/" element={<></>} />
    </Routes>
  </>
);
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<BreakfastList />} />
        <Route path="/breakfast/:id" element={<RecipePage />} />
        <Route path="/sweets" element={<SweetsList />} />
        <Route path="/sweets/:id" element={<RecipePage />} />
        <Route path="/lunch" element={<BreakfastList />} />
        <Route path="/lunch/:id" element={<RecipePage />} />
      </Routes>
    </div>
  );
};

export default App;
