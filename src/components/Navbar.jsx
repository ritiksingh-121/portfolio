import React from "react";

function Navbar() {
  const links = ["home", "about", "project", "contact"];

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-black text-white font-bold flex items-center justify-end px-10 z-50">
    
      <div className="flex gap-4">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="uppercase text-2xl p-1 rounded-md hover:shadow-[0_0_25px_rgba(52,150,4,2)]
 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
