"use client";

import { useEffect, useRef } from "react";
import gsap, { ensureGsapPlugins } from "@/lib/gsap";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/lib/blog"

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".blog-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="blog" className="py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl uppercase">
              PERSONAL BLOG
            </h2>
            <p className="mt-4 text-zinc-400 text-lg">
              Sharing my experience and insights on Medium.
            </p>
          </div>
          <a
            href="https://medium.com/@satyaf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent font-medium hover:underline decoration-2 underline-offset-8"
          >
            Visit Medium <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="divide-y divide-white/5">
          {blogs.map((blog, i) => (
            <a
              key={i}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-item group flex flex-col md:flex-row md:items-center justify-between py-8 gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest text-accent/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-sm font-mono text-zinc-500">
                  {blog.date}
                </span>
                <ArrowUpRight className="h-5 w-5 text-zinc-600 group-hover:text-accent transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
