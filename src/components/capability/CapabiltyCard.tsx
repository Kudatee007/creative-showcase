// components/CapabiltyCard.tsx
import { useRef, useEffect, useState } from "react";
import { MotionConfig, motion, type Variants } from "framer-motion";
import { videoV, titleV, cardV as defaultCardV } from "../../lib/anim.tsx";

type CapabiltyCardProps = {
  src?: string;
  className?: string;
  title: string;
  items: string[];
  poster?: string;
  /** CSS color strings */
  bColor?: string;
  hoverBgColor?: string;
  resetOnLeave?: boolean;
  playFromStartOnEnter?: boolean;
  ariaHidden?: boolean;
  /** Optional overrides */
  cardVariants?: Variants;
  videoVariants?: Variants;
  titleVariants?: Variants;
  itemVariants?: Variants;
};

export default function CapabiltyCard({
  src = "",
  className = "",
  title,
  items = [],
  poster = "",
  hoverBgColor,
  resetOnLeave = true,
  playFromStartOnEnter = false,
  ariaHidden = true,
  cardVariants = defaultCardV,
  videoVariants = videoV,
  titleVariants = titleV,
  itemVariants,
}: CapabiltyCardProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const play = () => {
    const v = ref.current;
    if (!v) return;
    if (playFromStartOnEnter) v.currentTime = 0;
    v.play().catch(() => {});
  };
  const pause = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    if (resetOnLeave) v.currentTime = 0;
  };

  // Merge provided colors into the base card variants
  // const mergedCardV: Variants = {
  //   rest: {
  //     ...(cardVariants?.rest as object),
  //   },
  //   hover: {
  //     ...(cardVariants?.hover as object),
  //     ...(hoverBgColor ? { backgroundColor: hoverBgColor } : {}),
  //   },
  // };

  const mergedCardV: Variants = {
    rest: {
      ...(cardVariants?.rest as object),
      // Apply hover background color on mobile
      ...(isMobile && hoverBgColor ? { backgroundColor: hoverBgColor } : {}),
      ...(isMobile ? { padding: '0.8rem' } : {}),
    },
    hover: {
      ...(cardVariants?.hover as object),
      ...(hoverBgColor ? { backgroundColor: hoverBgColor } : {}),
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        variants={mergedCardV}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className={`w-full min-w-[200px] h-full rounded-lg cursor-pointer hover:p-3 md:hover:p-6 ${className}`}
        style={{ borderRadius: 12 }}
      >
        <article
        >
          <figure
            className={`overflow-hidden rounded-md flex justify-center items-center h-[40vh] md:h-[80vh] lg:h-[55vh] z-10 ${className}`}
            onPointerEnter={play}
            onPointerLeave={pause}
            onFocus={play}
            onBlur={pause}
            onTouchStart={play}
            onTouchEnd={pause}
            tabIndex={0}
          >
            <motion.video
              ref={ref}
              className="rounded-lg object-cover z-20 w-[100%] h-[100%]"
              src={
                src ||
                "/public/videos/mixkit-animation-of-purple-background-and-white-triangles-99548-hd-ready.mp4"
              }
              poster={poster}
              muted
              playsInline
              preload="metadata"
              aria-hidden={ariaHidden}
              aria-label={ariaHidden ? undefined : "Preview video"}
              variants={videoVariants}
            />
          </figure>

          <motion.h3
            className="text-[23px] md:text-[35px] lg:text-[50px] text-black py-2"
            variants={titleVariants}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            {title}
          </motion.h3>

          <ul className="lg:grid lg:grid-cols-2 md:space-y-1 gap-x-5">
            {items.map((item, i) => (
              <motion.li
                key={i}
                className="text-[10px] md:text-sm 2xl:text-base"
                variants={itemVariants}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </article>
      </motion.div>
    </MotionConfig>
  );
}
