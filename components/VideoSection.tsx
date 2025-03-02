'use client'

import React, { useRef, useEffect, useState } from "react";

export default function VideoSection() {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 100;
  const easing = 0.15;

  const [easedScrollProgress, setEasedScrollProgress] = useState(0);

  useEffect(() => {
    const animate = () => {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      if (stickyMask.current) {
        stickyMask.current.style.maskSize = `${(initialMaskSize + maskSizeProgress) * 100}%`;
      }
      requestAnimationFrame(animate);
    };
    if (stickyMask.current && container.current) {
      requestAnimationFrame(animate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      const newEasedProgress = easedScrollProgress + delta * easing;
      setEasedScrollProgress(newEasedProgress);
      return newEasedProgress;
    }
    return easedScrollProgress;
  };

  return (
    <main className="lg:my-[10vh]">
      <div ref={container} className="relative h-[200vh]">
        <div
          ref={stickyMask}
          className="flex flex-row justify-center items-start lg:items-center overflow-hidden sticky top-0 h-screen"
          style={{
            maskImage: "url(/logo.svg)",
            maskPosition: "center",
            maskRepeat: "no-repeat",
          }}
        >
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}