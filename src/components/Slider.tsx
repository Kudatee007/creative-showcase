import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642111/bheeicedy3ihyzyn31iuum3m4cldsk8dqlxe_wh4lip.mp4",
    alt: "Project 1",
  },
  {
    src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642078/bheeicedz8a5tcbo6sr84repcz7zjtyfocua_zaf61j.mp4",
    alt: "Project 2",
  },
  {
    src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/ILLpcsHOAB_576p_1744824343_vu4fee.mp4",
    alt: "Project 3",
  },
  {
    src: "/videos/about4.mp4",
    alt: "Project 4",
  },
  {
    src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/GWazvydWJs_576p_1744824344_wyftge.mp4",
    alt: "Project 5",
  },
  {
    src: "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639607/LCVDnqXAon_576p_1751149542_a65jqv.mp4",
    alt: "Project 6",
  },
];

type SliderProps = {
  setCursorMode: (m: "idle" | "view") => void;
  setCursorText: (t: string) => void;
};

const Slider = ({ setCursorMode, setCursorText }: SliderProps) => {
  const dragEnter = () => {
    setCursorText("Drag");
    setCursorMode("view");
  };
  const leave = () => {
    setCursorText("");
    setCursorMode("idle");
  };

  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="embla overflow-hidden p-3 md:p-4" ref={emblaRef}>
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
              className="h-[clamp(300px,20vw,800px)] md:h-auto w-full object-cover rounded-lg"
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              // poster="/images/hero-poster.jpg"
              onMouseEnter={dragEnter}
              onMouseLeave={leave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
