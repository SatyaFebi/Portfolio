"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      });
      gsap.from(".hero-tags span", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay: 1.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,#1e3a8a_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#312e81_0%,transparent_50%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="hero-tags flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-bold uppercase tracking-widest text-accent">Full-Stack Developer</span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Linux System Administrator</span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-400">AI Enthusiast</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="overflow-hidden">
            <h1 className="hero-line text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase">
              I Develop <span className="text-accent italic">Systems</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase">
              Not Just <span className="text-zinc-600 italic">Code.</span>
            </h1>
          </div>
        </div>

        <div className="hero-sub mt-12 max-w-2xl">
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Building scalable web ecosystems and AI-powered solutions. Optimized for{" "}
            <span className="text-white font-medium">performance</span> and built for{" "}
            <span className="text-white font-medium">developer collaboration.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
