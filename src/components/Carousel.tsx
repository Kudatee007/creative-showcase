import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    src: "/videos/about1.mp4",
    alt: "Project 1",
  },
  {
    src: "/videos/about2.mp4",
    alt: "Project 6",
  },
  {
    src: "/videos/about3.mp4",
    alt: "Project 5",
  },
  {
    src: "/videos/about4.mp4",
    alt: "Project 7",
  },
  {
    src: "/videos/about5.mp4",
    alt: "Project 2",
  },
  {
    src: "/videos/about6.mp4",
    alt: "Project 4",
  },
];

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="embla overflow-hidden p-2 md:p-4" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="
              embla__slide 
              min-w-0
              flex items-center justify-center
              p-[6px]
              flex-[0_0_90%]   /* mobile: 1 slide per view */
              lg:flex-[0_0_28%] /* desktops: ~3.5 slides */
            "
          >
            <video
              className="h-[clamp(300px,32vw,800px)] md:h-auto w-full object-cover rounded-lg"
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              // poster="/images/hero-poster.jpg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
