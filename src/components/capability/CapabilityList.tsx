import CapabiltyCard from "./CapabiltyCard";
import useEmblaCarousel from "embla-carousel-react";

const CapabilityList = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="pt-10">
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
            <CapabiltyCard />
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
            <CapabiltyCard />
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
            <CapabiltyCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilityList;