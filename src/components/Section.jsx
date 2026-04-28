import React from "react";

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="w-full min-h-screen bg-[#0a0a0f] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h1 className="text-4xl uppercase text-center mb-16 font-bold text-cyan-400">
            {title}
          </h1>
        )}
        {children}
      </div>
    </section>
  );
}



export default Section;
