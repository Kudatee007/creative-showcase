import React from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
  return (
    <section className="py-10">
      <h4 className="py-4">Trusted by the world's leading brands</h4>
      <div>
        <div className="block lg:hidden">
          <BrandCard />
        </div>
        <div className="hidden lg:flex justify-between gap-4">
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </div>
      </div>
    </section>
  );
};

export default Brands;
