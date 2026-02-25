"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { Code2, Cpu, Container, LayoutGrid } from "lucide-react";

const stacks = [
  {
    name: "Core",
    icon: Code2,
    tools: ["PHP (Laravel)", "JavaScript (Vue.js, Next.js, React.js)", "Python (AI/ML)", "Ionic & Capacitor (Mobile)", "MySQL", "PostgreSQL"],
  },
  {
    name: "AI / Data",
    icon: Cpu,
    tools: ["RAG Architecture", "Vector DBs", "LLM Orchestration", "LangChain"],
  },
  {
    name: "Tools",
    icon: Container,
    tools: ["Docker", "Git / GitHub", "Notion", "Ubuntu", "n8n", "Figma", "Postman", "WAHA (WhatsApp API)"],
  },
//   {
//     name: "Architecture",
//     icon: LayoutGrid,
//     tools: ["Clean Architecture", "Modular Monolith", "RESTful API Design", "Service Layer Pattern"],
//   },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stack-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="tech"
      className="py-32 bg-white/5 backdrop-blur-sm border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl uppercase">
            Tech Stack
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Tools and technologies I use to build scalable, production-grade systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack, i) => (
            <div
              key={i}
              className="stack-item group glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 inline-block rounded-2xl bg-accent/20 p-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <stack.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-6">{stack.name}</h3>
              <ul className="space-y-3">
                {stack.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-zinc-400"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                    <span className="text-sm font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
