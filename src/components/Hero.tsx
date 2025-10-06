import React from "react";

const Hero = () => {
  return (
    <div className="p-3 md:p-4">
      <h1 className="text-[clamp(18px,10vw,700px)] font-normal text-center pb-20 pt-20 md:pt-30 text-black-20">
      Creative Showcase
      </h1>
      <div>
        <video
          className="aspect-[4/2] cursor-auto w-full h-full object-cover rounded-lg"
          src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759604931/formandfunsizzle_k1h5n4.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          // poster="/images/hero-poster.jpg"  // for faster first paint
        />
      </div>
      <div className="space-y-3 pt-14 pb-20 sm:pb-24 lg:pb-28 md:pt-20 lg:pt-24">
        <p
          className="home-intro 
    text-gray-10
    tracking-[-0.1vw]
    whitespace-normal
    cursor-default
    font-[Aeonik,sans-serif]
    text-[4.4vw]
    leading-[100%]
    inline
    max-[991px]:block max-[991px]:mb-[4vw] max-[991px]:text-[7vw]
    max-[767px]:block max-[767px]:leading-[110%]"
        >
          <span className="text-sm text-start pr-[18%] text-black-20 align-top">
            The studio
          </span>
          We are a global creative tech studio forging delightful experiences by
          blending design, technology, and storytelling. Driven to create value
          for people and brands through interaction
          <button className="w-full sm:w-[50%] lg:w-fit lg:ml-[1.4vw] mt-4 bg-black-20 text-white text-sm py-3 px-5 border-none rounded-4xl align-middle">
            Learn more
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
