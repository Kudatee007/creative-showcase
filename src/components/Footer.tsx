import logo from "/public/logo.svg";
import { motion } from "framer-motion";

const title = "Creative Showcase";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-3 lg:grid-cols-12 p-4">
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

      <h6 className="text-[11vw] 2xl:text-[10vw] text-center pt-10 lg:pt-20 font-meduim flex justify-center flex-wrap">
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{
              delay: i * 0.08,
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h6>
    </footer>
  );
};

export default Footer;
