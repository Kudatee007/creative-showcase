import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-3">
      <section>
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-start pr-12">
            <p>logo</p>
            <div>
              <h6>Menu</h6>
              <ul>
                <li>Studio</li>
                <li>Contact</li>
                <li>Work</li>
              </ul>
            </div>
            <div>
              <h6>Social</h6>
              <ul>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>Behance</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <div>
              <h6>Business enquires</h6>
              <p>timmy7@gmail.com</p>
            </div>
            <div>
              <h6>Join our team</h6>
              <p>apply@forman.co</p>
            </div>
          </div>
        </div>
      </section>
      <p className="w-full text-center text-[22vw] font-normal">Form&fun</p>
    </footer>
  );
};

export default Footer;
