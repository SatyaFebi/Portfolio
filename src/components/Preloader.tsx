"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars) return;

      gsap.set(chars, { opacity: 0 });

      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "steps(1)",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          document.body.style.overflow = "";
          window.dispatchEvent(new Event("resize"));
        },
      });

      const count = { value: 0 };
      tl.to(count, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = `${Math.round(count.value)}%`;
          }
        },
      });

      chars.forEach((char, i) => {
        tl.to(char, {
          opacity: 1,
          duration: 0.05,
          ease: "none",
        }, 0.3 + i * 0.12);
      });

      tl.to({}, { duration: 0.6 });

      tl.to([...Array.from(chars), cursorRef.current], {
        y: -40,
        opacity: 0,
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.in",
      });

      tl.to(counterRef.current, {
        opacity: 0,
        duration: 0.3,
      }, "<");

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-zinc-950 text-white"
    >
      <div className="flex items-center justify-center">
        <div className="flex">
          {"hello there!".split("").map((char, index) => (
            <span
              key={index}
              className="char text-5xl sm:text-7xl font-bold tracking-widest bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-400"
              style={{ whiteSpace: "pre" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <span
            ref={cursorRef}
            className="text-5xl sm:text-7xl font-light text-blue-400 ml-1"
          >
            |
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <div ref={counterRef} className="text-4xl sm:text-6xl font-light text-zinc-500">
          0%
        </div>
      </div>
    </div>
  );
}
