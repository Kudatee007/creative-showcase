import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-3">
      <section>
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-start pr-12 md:pr-36 w-full">
            <div className="basis-[40%] lg:basis-[100%]">
              <p>logo</p>
            </div>
            <div className="flex-1 lg:flex lg:justify-between gap-24">
              <div className="flex justify-between w-full pb-8 lg:gap-14">
                <div>
                  <h6>Menu</h6>
                  <ul>
                    <li className="text-xs">Studio</li>
                    <li className="text-xs">Contact</li>
                    <li className="text-xs">Work</li>
                  </ul>
                </div>
                <div>
                  <h6>Social</h6>
                  <ul>
                    <li className="text-xs">Instagram</li>
                    <li className="text-xs">Linkedin</li>
                    <li className="text-xs">Behance</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-8 md:flex-row md:justif-center md:items-center md:space-y-0 md:justify-between lg:flex-col lg:gap-5">
                <div>
                  <h6>Business enquires</h6>
                  <p>timmy7@gmail.com</p>
                </div>
                <div>
                  <h6>Join our team</h6>
                  <p>apply@forman.co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="w-full text-center text-[15vw] font-normal">Form&fun</p>
    </footer>
  );
};

export default Footer;
