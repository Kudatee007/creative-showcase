import CapabiltyCard from "./CapabiltyCard";
import useEmblaCarousel from "embla-carousel-react";
import capVid1 from "/videos/portfolio1.mp4"
import capVid2 from "/videos/portfolio2.mp4"
import capVid3 from "/videos/portfolio3.mp4"

const CapabilityList = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="min-h-[50vh] md:min-h-[90vh]">
      <h3 className="pb-2">Expertise & Capabilities</h3>
      <div className="embla overflow-hidden w-full" ref={emblaRef}>
        <div className="embla__container flex w-full">
          {/* Each slide */}
          <div
            className="
              embla__slide 
              min-w-0
              flex-[0_0_90%] /* 1 card per view on mobile */
              lg:flex-[0_0_33.33%] /* 3 cards per view on large screens */
              px-2 /* Add spacing between slides */
            "
          >
            <CapabiltyCard
              title="Technology"
              items={[
                "Spatial Computing (AR, VR, XR)",
                "Web3 / Blockchain",
                "AI Tools & Experiences",
                "Game Development",
                "Web Development",
                "Rapid Prototyping",
                "WebGL Experiences",
              ]}
              src={capVid1}
              className="bg-[#9BE2ED]"
              bColor="rgb(213, 242, 246)"
              hoverBgColor="rgb(213, 242, 246)"
            />
          </div>
          <div
            className="
              embla__slide 
              min-w-0
              flex-[0_0_90%] 
              lg:flex-[0_0_33.33%] 
              px-2
            "
          >
            <CapabiltyCard
              title="Design"
              items={[
                "Creative Direction",
                "Brand Identity",
                "Art Direction",
                "Design Systems",
                "User Experience Design",
                "Concept Design",
                "User Interface Design",
              ]}
              src={capVid2}
              className="bg-[#DFBBF0]"
              // bgColor="bg-[#fbefff]"
              hoverBgColor="rgb(228, 218, 232)"
            />
          </div>
          <div
            className="
              embla__slide 
              min-w-0
              flex-[0_0_90%] 
              lg:flex-[0_0_33.33%] 
              px-2
            "
          >
            <CapabiltyCard
              title="Motion & CGI"
              items={[
                "2D & 3D Animation",
                "Character Design",
                "2D & 3D Illustration",
                "Motion Identity",
                "Concept Art",
                "FOOH",
              ]}
              src={capVid3}
              className="bg-[#AFD5A3]"
              // bgColor="red"
              hoverBgColor="rgb(229, 244, 225)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilityList;
