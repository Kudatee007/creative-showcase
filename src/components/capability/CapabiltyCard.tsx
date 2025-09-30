import React from "react";
import trees from "../../assets/trees.jpg";

const CapabiltyCard = () => {
  return (
    <div className="bg-blue-200 p-4 w-full mn-w-[270px] rounded-lg">
      <article>
        <figure>
          <img
            src={trees}
            alt="Abstract cube representing technology"
            className="w-full"
          />
        </figure>
        <h3 className="text-[23px] md:text-[35px] lg:text-[50px] text-black-100 py-2">Technology</h3>
        <ul className="lg:flex lg:gap-15">
          <div>
            <li className="text-[12px]">Spatial Computing (AR, VR, XR)</li>
            <li className="text-[12px]">AI Tools & Experiences</li>
            <li className="text-[12px]">Web Development</li>
            <li className="text-[12px]">WebGL Experiences</li>
          </div>
          <div>
            <li className="text-[12px]">Web3 / Blockchain</li>
            <li className="text-[12px]">Game Development</li>
            <li className="text-[12px]">Rapid Prototyping</li>
          </div>
        </ul>
      </article>
    </div>
    
  );
};

export default CapabiltyCard;
