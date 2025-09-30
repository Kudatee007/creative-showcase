import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Work from "../Work/WorkGrid";
import FormAndFun from "../components/formandfun/FormAndFun";
import CapabilityList from "../components/capability/CapabilityList";
import Brands from "../components/brands/Brands";

const HomePage = () => {
  return (
    <div className="p-3">
      <Hero />
      <Carousel />
      <Work />
      <FormAndFun />
      <CapabilityList />
      <Brands />
    </div>
  );
};

export default HomePage;
