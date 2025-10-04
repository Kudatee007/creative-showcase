// import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    src: "../../public/videos/mixkit-hud-style-animated-data-graph-growth-trend-visualization-5396-hd-ready.mp4",
    alt: "Project 1",
  },
  {
    src: "../../public/videos/mixkit-animation-of-buildings-popping-up-on-a-street-99712-hd-ready.mp4",
    alt: "Project 6",
  },
  {
    src: "../../public/videos/mixkit-animation-of-futuristic-devices-99786-full-hd.mp4",
    alt: "Project 5",
  },
  {
    src: "../../public/videos/mixkit-animation-of-a-cyclist-moving-fast-99584-full-hd.mp4",
    alt: "Project 7",
  },
  {
    src: "../../public/videos/mixkit-intro-animation-with-multicolor-circles-and-ribbons-99555-hd-ready.mp4",
    alt: "Project 2",
  },
  // { src: "../../public/videos/mixkit-futuristic-landscape-animation-99544-full-hd.mp4", alt: "Project 3" },
  {
    src: "../../public/videos/mixkit-animation-of-purple-background-and-white-triangles-99548-hd-ready.mp4",
    alt: "Project 4",
  },
];

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="
              embla__slide 
              min-w-0
              flex items-center justify-center
              p-1
              flex-[0_0_90%]   /* mobile: 1 slide per view */
              lg:flex-[0_0_28%] /* desktops: ~3.5 slides */
            "
          >
            {/* <video
              className="h-[clamp(230px,30vw,800px)] w-full object-cover rounded-lg"
              src={slide.src}
              muted
              playsInline
              preload="metadata"
              // Mouse/trackpad
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
              // Pointer covers pen/other inputs
              onPointerEnter={(e) => e.currentTarget.play()}
              onPointerLeave={(e) => e.currentTarget.pause()}
              // Keyboard accessibility: play when focused via Tab, pause on blur
              onFocus={(e) => e.currentTarget.play()}
              onBlur={(e) => e.currentTarget.pause()}
              // Mobile fallback: tap to toggle play/pause
              onTouchStart={(e) => e.currentTarget.play()}
              onTouchEnd={(e) => e.currentTarget.pause()}
              aria-label="Preview video"
            /> */}
            <video
           className="h-[clamp(230px,30vw,800px)] w-full object-cover rounded-lg"
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              // poster="/images/hero-poster.jpg"  // optional: add a poster for faster first paint
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
