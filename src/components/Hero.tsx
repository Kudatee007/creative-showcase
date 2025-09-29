import React from "react";
import trees from "../assets/trees.jpg";

const Hero = () => {
  return (
    <div>
      <h1 className="text-[clamp(12px,11vw,700px)] font-light text-center pb-16 pt-6">
        Form&Fun
      </h1>
      <div>
        <img
          src={trees}
          alt=""
          className="w-full h-[clamp(140px,50vw,700px)] rounded-lg object-cover"
        />
      </div>
      <div className="space-y-3 pt-14 pb-20 sm:pb-24 lg:pb-28 md:pt-20 lg:pt-24">
        <p className="text-[clamp(23px,6vw,65px)] leading-7 sm:leading-13 lg:leading-15 text-gray-100">
          <span className="text-sm text-start pr-10 text-black-100">
            The studio
          </span>{" "}
          We are a global creative tech studio forging delightful experiences by
          blending design, technology, and storytelling. Driven to create value
          for people and brands through interaction.
        </p>
        <button className="w-full md:w-[200px] bg-black py-2 text-white border-none rounded-4xl">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
