import React from "react";


const Hero = () => {
  return (
    <div>
      <h1 className="text-[clamp(12px,8vw,700px)] font-light text-center py-30 text-black-100">
        Creative Showcase
      </h1>
      <div>
        <video
          className="absolut inset-0 h-[clamp(140px,50vw,700px)]  w-full object-cover"
          src="/public/videos/mixkit-a-man-and-the-coast-2537-full-hd.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          // poster="/images/hero-poster.jpg"  // optional: add a poster for faster first paint
        />

        {/* Optional: a subtle overlay for contrast on light clips */}
        <div className="absolute inset-0 bg-white/0" />
      </div>
      <div className="space-y-3 pt-14 pb-20 sm:pb-24 lg:pb-28 md:pt-20 lg:pt-24">
        <p className="text-[clamp(33px,3.5vw,65px)] leading-7 sm:leading-13 lg:leading-15 text-gray-100">
          <span className="text-sm text-start pr-[18%] text-black-100 align-top">
            The studio
          </span>{" "}
          We are a global creative tech studio forging delightful experiences by
          blending design, technology, and storytelling. Driven to create value
          for people and brands through interaction{""}
          <button className="w-fit bg-black text-white text-sm py-3 px-5 border-none rounded-4xl align-middle">
            Learn more
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
