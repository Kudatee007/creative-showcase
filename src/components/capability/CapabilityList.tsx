import CapabiltyCard from "./CapabiltyCard";
import useEmblaCarousel from "embla-carousel-react";

const CapabilityList = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="min-h-[50vh] md:min-h-[95vh] p-3 md:p-4">
      <h3 className="pb-2 text-black-20">Expertise & Capabilities</h3>
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
              src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642101/bhefcffg2eta2ry3k0f67vgol44t62chntda_hksyby.mp4"
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
              src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642090/bheeicecyrhzyi3dd26lfivkab97k907q706_qzzyps.mp4"
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
              src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642090/bheeiceccip4dtalzn188e4w87papbecrhou_an9son.mp4"
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
