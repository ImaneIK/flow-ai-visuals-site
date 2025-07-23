import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null); // follower (child)
  const follower = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // REMOVE hiding original cursor:
    // document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // document.body.style.cursor = "auto";
    };
  }, []);

  useEffect(() => {
    const follow = () => {
      const speed = 0.1; // follower speed
      follower.current.x += (pos.x - follower.current.x) * speed;
      follower.current.y += (pos.y - follower.current.y) * speed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${follower.current.x}px, ${follower.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(follow);
    };

    follow();
  }, [pos]);

  return (
    <>
      {/* Child (green dot) only */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-green-400 opacity-80 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
