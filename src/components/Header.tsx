import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3">
      <p>logo</p>
      <nav>
        <ul className="flex items-center gap-3 text-mute">
          <li className="text-sm">Studio</li>
          <li className="text-sm">Contact</li>
          <li className="text-sm">Work</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
