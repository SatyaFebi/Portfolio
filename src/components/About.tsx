"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(".about-highlight", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-32 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl uppercase">
              About
            </h2>
            <div className="mt-6 h-1 w-24 bg-accent/40" />
          </div>

          {/* Right */}
          <div className="about-content space-y-8">
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
              I&apos;m Satya Febi Nugroho, a Full-Stack Developer intern at{" "}
              <span className="text-white font-semibold">Honda Jakarta Center</span>, I
              bridge the gap between complex business requirements and high-performance
              technical solutions.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              While many focus on syntax, I focus on the{" "}
              <span className="text-white font-medium">system</span>. My approach is rooted in
              Developer Experience (DX). I create reusable service layers, robust logging
              systems, and clean architectures that make scaling and maintenance seamless.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Currently, I am heavily focused on{" "}
              <span className="text-accent font-medium">
                RAG (Retrieval-Augmented Generation)
              </span>{" "}
              implementations to bring the power of AI into production-grade applications.
            </p>

            {/* Focus highlights */}
            <div className="pt-6 flex flex-wrap gap-3">
              {[
                "Developer & User Experience",
                "Clean Code",
                "RAG Systems",
                "Service Layer Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="about-highlight px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
