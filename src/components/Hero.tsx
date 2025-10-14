import { motion } from "framer-motion";
interface HeroProps { 
  textShown: boolean; 
  textMovedUp: boolean; 
  pageReady: boolean; 
}

const Hero = ({ textShown, textMovedUp, pageReady }: HeroProps) => {
  const title = "Creative Showcase";


  return (
    <div className="p-4 md:p-4 min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Animate text up after letter-by-letter animation */}
      <motion.div
        initial={{ y: "28vh" }}
        animate={{ y: textMovedUp ? 0 : "28vh" }}
        transition={{
          duration: 1.2,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="flex items-center justify-center w-full h-full"
      >
        <h1
          className="text-[clamp(18px,10vw,700px)] font-normal text-center pt-14 lg:pt-28 pb-18 lg:pb-36 text-black-20 flex center flex-wrap"
        >
          {textShown &&
            title.split("").map((char, i) => (
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
                {char}
              </motion.span>
            ))}
        </h1>
      </motion.div>

      {/* Show rest of content after heading finishes moving up */}
      {pageReady && (
        <>
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <video
              className="aspect-[4/2] cursor-auto w-full h-full object-cover rounded-lg min-h-auto"
              src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759604931/formandfunsizzle_k1h5n4.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-3 pt-16 pb-20 sm:pb-24 lg:pb-28 md:pt-20 lg:pt-24"
          >
            <p
              className="home-intro 
              text-gray-10
              tracking-[-0.1vw]
              whitespace-normal
              cursor-default
              font-[Aeonik,sans-serif]
              text-[4.4vw]
              leading-[100%]
              inline
              max-[991px]:block max-[991px]:mb-[4vw] max-[991px]:text-[7vw]
              max-[767px]:block max-[767px]:leading-[110%]"
            >
              <span className="text-sm lg:text-base text-start pr-[18%] text-black-20 align-top">
                The studio
              </span>
              We are a global creative tech studio forging delightful
              experiences by blending design, technology, and storytelling.
              Driven to create value for people and brands through interaction
              <button className="w-full sm:w-[50%] lg:w-fit lg:ml-[1.4vw] mt-4 bg-black-20 text-white text-base py-3 px-5 border-none rounded-4xl align-middle">
                Learn more
              </button>
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Hero;
