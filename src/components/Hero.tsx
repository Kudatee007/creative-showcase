import React from "react";
import trees from "../assets/trees.jpg";

const Hero = () => {
  return (
    <div className="p-3">
      <h1 className="text-[10vw] font-normal text-center pb-16">Form&Fun</h1>
      <div>
        <img src={trees} alt="" className="w-full h-[170px]" />
      </div>
      <div className="space-y-3 pt-10">
        <p className="text-[27px] leading-7">
          <span className="text-sm text-start pr-12">The studio</span> We are a global creative tech studio forging delightful experiences by
          blending design, technology, and storytelling. Driven to create value
          for people and brands through interaction.
        </p>
        <button className="w-full bg-black py-2 text-white border-none rounded-4xl">Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
