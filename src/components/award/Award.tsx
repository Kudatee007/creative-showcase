import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Award {
  id: string;
  title: string;
  project: string;
  categories: string[];
  year: string;
}

const Awards: React.FC = () => {
  const [emblaRef] = useEmblaCarousel();

  const awards: Award[] = [
    {
      id: "01",
      title: "Awward",
      project: "Form&Fun Portfolio",
      categories: [
        "1x Site of the Day",
        "1x Portfolio Honors",
        "1x Developer Award",
        "1x Honourable Mention",
      ],
      year: "2025",
    },
    {
      id: "02",
      title: "Webby Awards",
      project: "Powerade Mind Zone",
      categories: ["AI, Immersive & Games"],
      year: "2025",
    },
    {
      id: "03",
      title: "Clio Awards — Gold",
      project: "Oreo & Pacman Supermarcade",
      categories: ["Interactive/Experiential"],
      year: "2025",
    },
    {
      id: "04",
      title: "3x Clio Awards — Shortlist",
      project: "Oreo & Pacman Supermarcade",
      categories: ["1x Entertainment", "1x Use of New Realities"],
      year: "2025",
    },
    {
      id: "05",
      title: "Auggie Award",
      project: "Oreo & Pacman Supermarcade",
      categories: ["Best Campaign"],
      year: "2025",
    },
    {
      id: "06",
      title: "3x ADC Festival — Silver",
      project: "Oreo & Pacman Supermarcade",
      categories: [
        "1x Craft AR/VR",
        "1x Digital Out of Home",
        "1x Point-of-Sale Media",
      ],
      year: "2025",
    },
    {
      id: "07",
      title: "2x ADC Festival — Bronze",
      project: "Oreo & Pacman Supermarcade",
      categories: [
        "1x Gaming Experiences",
        "1x Craft for Spatial Experiences AR/VR",
      ],
      year: "2025",
    },
    {
      id: "08",
      title: "Clio Awards — Silver",
      project: "Powerade Mind Zone",
      categories: ["Digital/Mobile"],
      year: "2024",
    },
    {
      id: "09",
      title: "Cannes Lions — Bronze",
      project: "Oreo & Pacman Supermarcade",
      categories: ["Outdoor"],
      year: "2024",
    },
    {
      id: "10",
      title: "4x Cannes Lions — Shortlist",
      project: "Oreo & Pacman Supermarcade",
      categories: ["Outdoor"],
      year: "2024",
    },
    {
      id: "11",
      title: "New York Festivals — Bronze",
      project: "Oreo & Pacman Supermarcade",
      categories: ["Digital/Mobile: Best use"],
      year: "2024",
    },
  ];

  return (
    // <div className="min-h-screen bg-white mt-32">
    //   <div className="w-full mx-auto">
    <div className="w-full mx-auto">
      {/* Header */}
      <h3 className="text-5xl md:text-7xl lg:text-[6vw] text-[#1d1d1d] mb-16 md:mb-24">
        AN AWARD
        <br />
        WINNING STUDIO
      </h3>

      {/* Mobile: Carousel */}
      <div className="embla overflow-hidden block md:hidden" ref={emblaRef}>
        <div className="embla__container flex flex-row">
          {awards.map((award) => (
            <div
              key={award.id}
              className="grid grid-cols-1 items-start gap-x-6 gap-y-6 py-8 border-t w-[50%] border-gray-300 pr-4 embla__slide
        min-w-0 p-1 flex-[0_0_83%]"
            >
              {/* ID */}
              <div className="tabular-nums text-left text-xs">{award.id}</div>

              {/* Title (top-aligned with rest, left only) */}
              <div className="col-span-1">
                <h4 className="text-left text-lg font-extrabold lg:py-0">
                  {award.title}
                </h4>
              </div>

              {/* Project */}
              <div className="">
                <h5 className="text-xs text-gray-400 mb-1">Project</h5>
                <p className="text-left text-[10px] md:text-xs">{award.project}</p>
              </div>

              {/* Categories */}
              <div>
                <h5 className="text-xs text-gray-400 mb-1">Category</h5>
                {award.categories.map((category, idx) => (
                  <p key={idx} className="text-left text-[10px] md:text-xs leading-snug mb-1">
                    {category}
                  </p>
                ))}
              </div>

              {/* Year */}
              <div>
                <h5 className="text-xs text-gray-400 mb-1">Year</h5>
                <p className="tabular-nums text-left text-[10px] md:text-xs">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Plain stacked list */}
      <div className="hidden md:block border-t border-gray-300">
        {awards.map((award) => (
          <div
            key={award.id}
            className="grid grid-cols-[0.4fr_2fr_1.1fr_1.1fr_40px] items-start gap-x-6 border-b border-gray-300 py-8"
          >
            {/* ID */}
            <div className="tabular-nums text-left text-xs">{award.id}</div>

            {/* Title */}
            <div className="col-span-1">
              <h4 className="text-left text-lg font-extrabold">
                {award.title}
              </h4>
            </div>

            {/* Project */}
            <div>
              <h5 className="text-xs text-gray-400 mb-1">Project</h5>
              <p className="text-left text-xs">{award.project}</p>
            </div>

            {/* Categories */}
            <div>
              <h5 className="text-xs text-gray-400 mb-1">Category</h5>
              {award.categories.map((category, idx) => (
                <p key={idx} className="text-left text-xs leading-snug">
                  {category}
                </p>
              ))}
            </div>

            {/* Year */}
            <div>
              <h5 className="text-xs text-gray-400 mb-1">Year</h5>
              <p className="tabular-nums text-left text-xs">{award.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Awards;
