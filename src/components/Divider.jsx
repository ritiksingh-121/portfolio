import React from "react";

function Divider() {
  return (
    <div className="relative w-full flex justify-center">
      {/* glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px w-2/3
                      bg-red-900
                      blur-xl opacity-60" />
      
      {/* sharp line */}
      <div className="relative h-px w-2/3
                      bg-gradient-to-r
                      from-transparent
                      via-red-900
                      to-transparent" />
    </div>
  );
}

export default Divider;
