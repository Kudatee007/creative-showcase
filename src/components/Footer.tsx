import React from "react";
import logo from "/public/logo.svg";

const Footer = () => {
  return (
    <footer className="p-3">
      <div className="grid grid-cols-3 items-center justify-center lg:grid-cols-12">
        <div className="lg:col-span-6">
          <a href="#" className="text-xs">
            <img
              src={logo}
              alt="logo"
              className="w-[12vw] md:w-[5vw] lg:w-[3vw]"
            />
          </a>
        </div>

        <div className="">
          <h6 className="text-gray-400 text-[clamp(14px,2.5vw,15px)] font-normal">
            Menu
          </h6>
          <ul className="text-[clamp(14px,3vw,15px)]">
            <li className="text-black-20">Studio</li>
            <li className="text-black-20">Contact</li>
            <li className="text-black-20">Work</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h6 className="text-gray-400 text-[clamp(14px,2.5vw,15px)] font-normal">
            Social
          </h6>
          <ul className="text-[clamp(14px,2.5vw,15px)]">
            <li className="text-black-20">Instagram</li>
            <li className="text-black-20">Linkedin</li>
            <li className="text-black-20">Behance</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:items-center md:space-y-0 md:justify-between lg:flex-col lg:gap-5 col-span-">
          <div>
            <h6 className="text-gray-400 text-[clamp(14px,2.5vw,15px)] font-normal">
              Business enquires
            </h6>
            <p className="text-[clamp(14px,2.5vw,15px)] text-black-20 leading-5">
              timmy7@gmail.com
            </p>
          </div>
          <div>
            <h6 className="text-gray-400 text-[clamp(14px,2.5vw,15px)] font-normal">
              Join our team
            </h6>
            <p className="text-[clamp(14px,2.5vw,15px)] text-black-20 leading-5">
              apply@forman.co
            </p>
          </div>
        </div>
      </div>
      <p className="text-[clamp(25px,10vw,120px)] text-center pt-10">
        Creative Showcase
      </p>
    </footer>
  );
};

export default Footer;
