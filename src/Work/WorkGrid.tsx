import React from "react";
import "./WorkGrid.css";
import WorkCard from "./WorkCard";

const WorkGrid = () => {
  return (
    <section className="pt-10">
      <h2 className="text-[clamp(22px,10vw,110px)]">WORK</h2>
      <div className="marquee pb-5">
        <div className="marquee-content text-gray-100 text-[170px]">
          <span>
            EXPERIENTAL MOTION SPATIAL VR GEN-AI AR GAMING VIRTUAL-FASHION
            IMMERSIVE BRAND
          </span>
          <span>
            EXPERIENTAL MOTION SPATIAL VR GEN-AI AR GAMING VIRTUAL-FASHION
            IMMERSIVE BRAND
          </span>
        </div>
      </div>
      <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-3 items-stretch">
        <div className="lg:col-span-2">
          <WorkCard
            src={"/public/videos/mixkit-animation-of-buildings-popping-up-on-a-street-99712-hd-ready.mp4"}
            // poster={trees}
            // src={s.src}
            // poster={s.poster}
            // className="h-[clamp(230px,30vw,800px)] w-full object-cover rounded-lg"
            resetOnLeave
            playFromStartOnEnter={false}
          />
        </div>
        <WorkCard
            src={"/public/videos/mixkit-animation-of-buildings-popping-up-on-a-street-99712-hd-ready.mp4"}
            // poster={trees}
            // src={s.src}
            // poster={s.poster}
            // className="h-[clamp(230px,30vw,800px)] w-full object-cover rounded-lg"
            resetOnLeave
            playFromStartOnEnter={false}
          />
            <WorkCard
            src={"/public/videos/mixkit-animation-of-buildings-popping-up-on-a-street-99712-hd-ready.mp4"}
            // poster={trees}
            // src={s.src}
            // poster={s.poster}
            // className="h-[clamp(230px,30vw,800px)] w-full object-cover rounded-lg"
            resetOnLeave
            playFromStartOnEnter={false}
          />
        <div className="lg:col-span-2">
      <WorkCard
            src={"/public/videos/mixkit-animation-of-buildings-popping-up-on-a-street-99712-hd-ready.mp4"}
            // poster={trees}
            // src={s.src}
            // poster={s.poster}
            // className="h-[clamp(230px,30vw,800px)] w-full object-cover rounded-lg"
            resetOnLeave
            playFromStartOnEnter={false}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
