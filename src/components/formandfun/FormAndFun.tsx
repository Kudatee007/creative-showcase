import React, { useEffect, useState } from "react";
import "./FormAndFun.css";

const WORDS = ["CREATIVE", "TECHNOLOGY", "STUDIO"];
const REPEAT_COUNT = 10; // how many times to repeat the pattern
const SCROLL_SPEED = 0.5;

const FormAndFun = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-10 md:py-15 lg:py-20">
      <div className="marqueee pb-5">
        <div
          className="marqueee-content text-black-100 text-[170px]"
          style={{
            transform: `translateX(-${scrollPosition * SCROLL_SPEED}px)`,
          }}
        >
          {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center">
                <span className="big-span px-8">Form&Fun</span>
                <span className="small-span text-[6px] md:text-[8px]">
                  {WORDS.map((w, j) => (
                    <span key={j}>{w}</span>
                  ))}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormAndFun;
