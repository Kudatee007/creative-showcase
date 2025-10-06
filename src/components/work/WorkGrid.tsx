import React from "react";
import "./WorkGrid.css";
import WorkCard from "./WorkCard";

type WorkGridProps = {
  setCursorMode: (m: "idle" | "view") => void;
  setCursorText: (t: string) => void;
};

const WorkGrid = ({ setCursorMode, setCursorText }: WorkGridProps) => {
  const viewEnter = () => {
    setCursorText("View");
    setCursorMode("view");
  };
  const leave = () => {
    setCursorText("");
    setCursorMode("idle");
  };
  return (
    <section className="pt-10">
      <div className="flex justify-between items-center p-3 md:p-4">
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
      <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 items-stretch p-3 md:p-4">
        <div className="lg:col-span-2">
          <WorkCard
            src={"https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642096/bheeicdi21w0hkxyqiby6vxovghp64qh2wan_qwmt7l.mp4"}
            title="Oreo x Pacman"
            desc="AIR EXPERIENCE"
            // poster={trees}
            txtColor="md:text-white"
            resetOnLeave
            playFromStartOnEnter={false}
            onMouseEnter={viewEnter}
            onMouseLeave={leave}
          />
        </div>
        <WorkCard
          src={"https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642676/YThAIwoXKB_576p_1744824072_ccmg6f.mp4"}
          title="Doordash Summer of Dashpass"
          desc="CAMPAIGN"
          status="COMING SOON"
          // poster={trees}
          txtColor="md:text-black-20"
          resetOnLeave
          playFromStartOnEnter={false}
          onMouseEnter={viewEnter}
          onMouseLeave={leave}
        />
        <WorkCard
          src={"https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642080/bheeicea8cwvkf21vcnbg8jhx3wo0wyb42im_q9yvuz.mp4"}
          title="Widllet"
          desc=""
          // poster={trees}
          txtColor="md:text-black-20"
          resetOnLeave
          playFromStartOnEnter={false}
          onMouseEnter={viewEnter}
          onMouseLeave={leave}
        />
        <div className="lg:col-span-2">
          <WorkCard
            src={"https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642089/bheeicea3wowr2ifyqckn5737cnu42mewpr1_a8wqzo.mp4"}
            title="Widllet"
            desc="BRAND IDENTITY APP"
            // poster={trees}
            txtColor="md:text-white"
            resetOnLeave
            playFromStartOnEnter={false}
            onMouseEnter={viewEnter}
            onMouseLeave={leave}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
