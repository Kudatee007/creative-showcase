import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Work from "../components/work/WorkGrid";
import FormAndFun from "../components/formandfun/FormAndFun";
import CapabilityList from "../components/capability/CapabilityList";
import Brands from "../components/brands/Brands";
import Awards from "../components/award/Award";

interface HomePageProps {
  setCursorMode: (m: "idle" | "view") => void;
  setCursorText: (t: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCursorMode, setCursorText }) => {
  return (
    <main>
      <Hero />
      <Slider setCursorMode={setCursorMode} setCursorText={setCursorText}/>
      <Work setCursorMode={setCursorMode} setCursorText={setCursorText}/>
      <FormAndFun />
      <CapabilityList />
      <Awards />
      <Brands />
    </main>
  );
};

export default HomePage;
