"use client";

import { useEffect, useRef } from "react";
import gsap, { ensureGsapPlugins } from "@/lib/gsap";
import { experiences } from "@/lib/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="text-5xl font-bold tracking-tighter md:text-7xl uppercase">
            Experience
          </h2>
          <div className="mt-6 h-1 w-24 bg-accent/40" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-item group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-10 rounded-3xl border border-white/5 bg-white/3 hover:bg-white/5 transition-all duration-500"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm text-accent tracking-normal">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {exp.company}
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-xl font-medium text-white/90">{exp.role}</h4>
                <p className="text-lg text-zinc-400 font-light leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
