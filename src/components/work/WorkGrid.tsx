import React from "react";
import "./WorkGrid.css";
import WorkCard from "./WorkCard";

const WorkGrid = () => {
  return (
    <section className="pt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[clamp(22px,8vw,100px)] leading-none">WORK</h2>
        <div className="hidden lg:flex flex-col items-end align-bottom text-right">
          <p className="text-[#1d1d1d]  text-[1vw]">Selected Work</p>
          <span className="text-[#9a9a9a] text-[1vw]">(22-25)</span>
        </div>
      </div>
      {/* marquee slider */}
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
            src={"/videos/work1.mp4"}
            title="Oreo x Pacman"
            desc="AIR EXPERIENCE"
            // poster={trees}
            txtColor="md:text-white"
            resetOnLeave
            playFromStartOnEnter={false}
          />
        </div>
        <WorkCard
          src={"/videos/work2.mp4"}
          title="Doordash Summer of Dashpass"
          desc="CAMPAIGN"
          status="COMING SOON"
          // poster={trees}
          txtColor="md:text-black-20"
          resetOnLeave
          playFromStartOnEnter={false}
        />
        <WorkCard
          src={"/videos/work3.mp4"}
          title="Widllet"
          desc=""
          // poster={trees}
          txtColor="md:text-black-20"
          resetOnLeave
          playFromStartOnEnter={false}
        />
        <div className="lg:col-span-2">
          <WorkCard
            src={"/videos/work4.mp4"}
            title="Widllet"
            desc="BRAND IDENTITY APP"
            // poster={trees}
            txtColor="md:text-white"
            resetOnLeave
            playFromStartOnEnter={false}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
