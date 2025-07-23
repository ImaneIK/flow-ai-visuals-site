import React, { useRef, useEffect, useState } from "react";

export default function ScrollControlledVideo({ src, maxWidth = 501 }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  // When hovered and user scrolls inside container, update video time
  useEffect(() => {
    if (!isHover) return;

    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    // Store last scroll position
    let lastScrollY = container.scrollTop;

    // Max duration of video in seconds
    const duration = video.duration || 1;

    const onScroll = () => {
      const scrollY = container.scrollTop;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Map scroll delta to video time change
      // Adjust speed multiplier to your liking
      const speed = 0.001; // tweak this

      let newTime = video.currentTime + delta * speed;

      // Clamp video time between 0 and duration
      newTime = Math.min(Math.max(newTime, 0), duration);

      video.currentTime = newTime;
    };

    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, [isHover]);

  // Auto play muted video, loop disabled so we can scrub manually
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.loop = false;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        width: "100%",
        maxWidth: maxWidth,
        aspectRatio: "3/4",
        // overflow: "hidden",
        cursor: "grab",
        position: "relative",
        maskImage:
          "radial-gradient(circle, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)",
      }}
    >
      <video
      className="mt-[60%]"
        ref={videoRef}
        src={src}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none", // so scroll events hit container
          userSelect: "none",
           objectFit: "cover",
        // clipPath: "inset(0 0 50% 0)", // top, right, bottom, left
        }}
        playsInline
        muted
      />
    </div>
  );
}
