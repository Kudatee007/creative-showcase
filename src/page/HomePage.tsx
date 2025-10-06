import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Work from "../components/work/WorkGrid";
import FormAndFun from "../components/formandfun/FormAndFun";
import CapabilityList from "../components/capability/CapabilityList";
import Brands from "../components/brands/Brands";
import Awards from "../components/award/Award";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Carousel />
      <Work />
      <FormAndFun />
      <CapabilityList />
      <Awards />
      <Brands />
    </div>
  );
};

export default HomePage;
