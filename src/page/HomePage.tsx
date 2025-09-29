import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Work from "../components/Work/WorkGrid";

const HomePage = () => {
  return (
    <div className="p-3">
      <Hero />
      <Carousel />
      <Work />
    </div>
  );
};

export default HomePage;
