import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import trees from "../assets/trees.jpg";

const slides = [
  { src: trees, alt: "Project 1" },
  { src: trees, alt: "Project 2" },
  { src: trees, alt: "Project 3" },
  { src: trees, alt: "Project 4" },
  { src: trees, alt: "Project 5" },
  { src: trees, alt: "Project 6" },
  { src: trees, alt: "Project 7" },
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
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-[clamp(230px,30vw,800px)] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
