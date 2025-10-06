import logo from "/public/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-3 lg:grid-cols-12 p-3 md:p-4">
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
          <h6 className="text-gray-10 text-[4vw] md:text-[2.4vw] lg:text-[1vw] font-normal">
            Menu
          </h6>
          <ul className="text-[4vw] md:text-[2.4vw] lg:text-[1vw] text-black-20">
            <li>Studio</li>
            <li>Contact</li>
            <li>Work</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h6 className="text-gray-10 text-[4vw] md:text-[2.4vw] lg:text-[1vw] font-normal">
            Social
          </h6>
          <ul className="text-[4vw] md:text-[2.4vw] lg:text-[1vw] text-black-20">
            <li className="text-black-20">Instagram</li>
            <li className="text-black-20">Linkedin</li>
            <li className="text-black-20">Behance</li>
          </ul>
        </div>

        {/* <div className="col-span-2 flex flex-col items-center justify-center space-y-8 md:flex-row md:items-center md:space-y-0 md:justify-between lg:flex-col lg:gap-5"> */}
        <div className="col-start-2 flex flex-col gap-8 pt-6 lg:col-auto lg:pt-0">
          <div>
            <h6 className="text-gray-10 text-[4vw] md:text-[2.4vw] lg:text-[1vw] font-normal">
              Business enquires
            </h6>
            <p className="text-[4vw] md:text-[2.4vw] lg:text-[1vw] text-black-20">
              timmy7@gmail.com
            </p>
          </div>
          <div>
            <h6 className="text-gray-10 text-[4vw] md:text-[2.4vw] lg:text-[1vw] font-normal">
              Join our team
            </h6>
            <p className="text-[4vw] md:text-[2.4vw] lg:text-[1vw] text-black-20">
              apply@forman.co
            </p>
          </div>
        </div>
      </div>
      <p className="text-[11.6vw] text-center pt-10 font-meduim">
        Creative Showcase
      </p>
    </footer>
  );
};

export default Footer;
