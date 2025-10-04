import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log("ScrollY:", window.scrollY); // Debugging
      setScrolled(window.scrollY > 160);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 flex justify-between items-center p-4 z-50 w-full max-w-screen bg-white-100">
      <a href="#" className="text-xs">
        logo
      </a>
      <div className="hidden md:flex justify-between w-full text-xs px-[23%]">
        <span
          className={`transition-opacity duration-1500 ease-in-out ${scrolled ? "block opacity-100 visible" : "hidden opacity-0 invisible"}`}
        >
          Form&Fun
        </span>
        <span>Creative Technology Studio</span>
      </div>
      <nav>
        <ul className="ml-auto flex items-center gap-2 md:gap-6 text-[11px] md:text-sm text-black-100 font-bold">
          <li>
            <a
              href="#studio"
              // className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            >
              Studio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              // className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#work"
              // className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            >
              Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;