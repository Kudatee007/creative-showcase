import { BrandAnim } from "./BrandAnim";

const itemsMobile = [
  {
    image: "/spotify-logo-white.svg",
    hoverImage: "/spotify-logo.svg",
    bgColor: "#1DB954", // Spotify green for mobile
    hoverColor: "#ffffff",
    alt: "Spotify",
  },
  {
    image: "/doordash-logo-white.svg",
    hoverImage: "/doordash-logo.svg",
    bgColor: "#FF3008", // DoorDash red
    hoverColor: "#FF3008",
    alt: "DoorDash",
  },
  {
    image: "/google-logo-white.svg",
    hoverImage: "/google-logo.svg",
    bgColor: "#4285F4", // Google blue
    hoverColor: "#4285F4",
    alt: "Google",
  },
  {
    image: "/coke-logo-white.svg",
    hoverImage: "/coke-logo.svg",
    bgColor: "#F40009", // Coke red
    hoverColor: "#F40009",
    alt: "Coca-Cola",
  },
];

const itemsDesk = [
  {
    image: "/spotify-logo.svg",
    hoverImage: "/spotify-logo-white.svg",
    bgColor: "#e7e7e7",
    hoverColor: "#1DB954",
    alt: "Spotify",
  },
  {
    image: "/doordash-logo.svg",
    hoverImage: "/doordash-logo-white.svg",
    bgColor: "#e7e7e7",
    hoverColor: "#FF3008",
    alt: "DoorDash",
  },
  {
    image: "/google-logo.svg",
    hoverImage: "/google-logo-white.svg",
    bgColor: "#e7e7e7",
    hoverColor: "#4285F4",
    alt: "Google",
  },
  {
    image: "/coke-logo.svg",
    hoverImage: "/coke-logo-white.svg",
    bgColor: "#e7e7e7",
    hoverColor: "#F40009",
    alt: "Coca-Cola",
  },
];


const Brands = () => {
  return (
    <section className="p-4 pt-10">
      <h4 className="py-4 text-[clamp(32px,3.2vw,100px)] leading-9 md:pb-12 md:pt-30">
        Trusted by the world's leading brands
      </h4>
      <div>
        <div className="block lg:hidden">
          <BrandAnim items={itemsMobile} />
        </div>
        <div className="hidden lg:flex justify-between gap-4 h-full">
        {itemsDesk.map((_, index) => (
            <BrandAnim key={index} items={itemsDesk} startIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
