import React from "react";
import Navbar from "./components/Navbar";
import Subheading from "./components/Subheading";
import Header from "./components/Header";
import "./App.css";
import Categories from "./components/Categories";
import Gallery from "./components/Gallery";

import Chef from "./components/Chef";
import BreakfastList from "./components/BreakfastList";
import { Route, Routes } from "react-router-dom";
import "./Style.scss";
import RecipePage from "./components/RecipePage";

const App = () => {
  return (
    <div className="container">

<Navbar/>
      <Routes>
        <Route path="/" element={<>
      <Header/>
      <Chef/>
      <Categories/>
      <Gallery/></>} />
        <Route path="/breakfast" element={<BreakfastList />} />
        <Route path="/breakfast/:id" element={<RecipePage />} />
      </Routes>

      {/* <ImageSlider/> */}
    </div>
  );
};

export default App;
