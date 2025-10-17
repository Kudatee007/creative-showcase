import { useEffect, useState } from "react";
import logo from "/logo.svg";
import Hero from "./Hero";

interface HeaderProps {
  textShown: boolean;
  textMovedUp: boolean;
  pageReady: boolean;
}

function useScrollTrigger(threshold: number = 160) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setIsActive(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // set initial on mount
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isActive;
}

type SwapTextProps = {
  text1: string; // shown before scroll
  text2: string; // shown after scroll
  isActive: boolean;
  className?: string;
};

function SwapText({ text1, text2, isActive, className }: SwapTextProps) {
  return (
    <div
      className={`relative overflow-hidden h-6 md:h-7 hidden md:block ${className ?? ""}`}
    >
      {/* initial text (slides up on activate) */}
      <span
        className={[
          "absolute inset-0 flex items-center",
          "transition-transform duration-500 ease-in-out",
          isActive ? "-translate-y-full" : "translate-y-0",
          "text-[1vw] max-[991px]:text-[1.6vw] max-[767px]:text-[2.4vw] max-[479px]:text-[4vw] text-black-20 font-normal",
        ].join(" ")}
      >
        {text1}
      </span>

      {/* active text */}
      <span
        className={[
          "absolute inset-0 flex items-center",
          "transition-transform duration-500 ease-in-out",
          isActive ? "translate-y-0" : "translate-y-full",
          "text-[1vw] max-[991px]:text-[1.6vw] max-[767px]:text-[2.4vw] max-[479px]:text-[4vw] text-black-20 font-normal",
        ].join(" ")}
      >
        {text2}
      </span>
    </div>
  );
}

const Header = ({ textShown, textMovedUp, pageReady }: HeaderProps) => {
  const isScrolled = useScrollTrigger();

  return (
    <header>
      <div
        className={[
          pageReady ? "opacity-100" : "opacity-0",
          "transition-opacity duration-500",
          "fixed top-0 z-[100] w-full h-[46px] py-3 px-4 md:p-[11px] bg-white",
          "flex justify-between items-center",
          "md:grid md:grid-rows-[auto] md:grid-cols-4 md:gap-x-[1vw] md:gap-y-0",
        ].join(" ")}
      >
        <div>
          <a href="/" className="text-xs">
            <img src={logo} alt="logo" className="w-[6vw] md:w-[1.7vw]" />
          </a>
        </div>
        <SwapText
          text1="Creative Technology Studio"
          text2="Form&Fun"
          isActive={isScrolled}
        />
        <SwapText
          text1=""
          text2="Creative Technology Studio"
          isActive={isScrolled}
        />
        <nav>
          <ul className="ml-auto flex items-center justify-end gap-2 md:gap-[1vw] text-[1vw] max-[991px]:text-[1.6vw] max-[767px]:text-[2.4vw] max-[479px]:text-[4vw] text-black-20 font-normal">
            <li>
              <a href="#studio">Studio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
        </nav>
      </div>
      <Hero textShown={textShown} textMovedUp={textMovedUp} pageReady={pageReady} />
    </header>
  );
};

export default Header;
