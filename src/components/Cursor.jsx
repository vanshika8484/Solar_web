import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
      {/* Outer Circle (outline) */}
      <div className="w-10 h-10 border-2 border-orange-500 rounded-full opacity-70"></div>

      {/* Inner Dot */}
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default Cursor;
