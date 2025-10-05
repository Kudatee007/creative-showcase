import React from "react";
import logo from "/public/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full p-3">
      <section>
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-3 items-start w-full md:grid md:grid-cols- md:gap-x-[1vw]">
            <div className="md:col-span-1">
              <a href="#" className="text-xs">
                <img src={logo} alt="logo" className="w-[12vw] md:w-[5vw] lg:w-[3vw]" />
              </a>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:w-full gap-24 ">
              <div className="grid grid-cols-4 w-full pb-8 lg:gap-14 lg:col-span-2">
                <div className="col-span-3">
                  <h6 className="text-gray-400 text-[clamp(14px,2.5vw,15px)] font-normal">
                    Menu
                  </h6>
                  <ul className="text-[clamp(14px,3vw,15px)]">
                    <li className="text-black-20 leading-5">Studio</li>
                    <li className="text-black-20 leading-5">Contact</li>
                    <li className="text-black-20 leading-5">Work</li>
                  </ul>
                </div>
                <div className="">
                  <h6 className="text-gray-400 text-[clamp(14px,2.5vw,15px)] font-normal">
                    Social
                  </h6>
                  <ul className="text-[clamp(14px,2.5vw,15px)]">
                    <li className="text-black-20 leading-5">Instagram</li>
                    <li className="text-black-20 leading-5">Linkedin</li>
                    <li className="text-black-20 leading-5">Behance</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-8 md:flex-row md:items-center md:space-y-0 md:justify-between lg:flex-col lg:gap-5">
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
          </div>
        </div>
      </section>
      <p className="text-[clamp(25px,10vw,120px)] text-center pt-10">
        Creative Showcase
      </p>
    </footer>
  );
};

export default Footer;
