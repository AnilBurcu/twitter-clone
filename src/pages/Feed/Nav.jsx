import React from "react";
import { navSections } from "../../utils/constants";

const Nav = () => {
  return (
    <nav className="flex flex-col justify-between px-2 py-4">
      <div>
        <img className="w-14 mb-4" src="x-logo.webp" alt="" />
        {navSections.map((i, key) => (
          <div
            className="flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-[#505050b7] max-md:justify-center"
            key={key}
          >
            {i.icon}
            <span className="whitespace-nowrap max-md:hidden">{i.title}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
