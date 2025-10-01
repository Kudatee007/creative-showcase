import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 fixed z-50 w-full bg-white-100">
      <p className="text-[12px]">logo</p>
      <nav>
        <ul className="flex items-center gap-3 text-mute">
          <li className="text-[12px]">Studio</li>
          <li className="text-[12px]">Contact</li>
          <li className="text-[12px]">Work</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
