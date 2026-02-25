"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "RAG AI System",
    category: "Artificial Intelligence",
    problem:
      "Standard LLMs often lack specific context or suffer from hallucinations when dealing with private data.",
    solution:
      "Built an end-to-end RAG system utilizing Vector Databases and LangChain for intelligent information retrieval.",
    highlights: [
      "Optimized query latency with efficient chunking strategies",
      "Integrated seamless API layer connecting AI engine with modern web frontend",
      "Reusable retrieval service supporting multiple data sources",
    ],
    image: "/assets/img/rag-ai.png",
    github: "https://github.com/SatyaFebi/Internal-RAG-System.git",
    external: "https://your-project-url.com",
    badge: ["Currently in development"],
  },
  {
    title: "Millenium Service",
    category: "Automotive Enterprise & Automated Billing System",
    problem:
      "Scaling operational efficiency for a new service center partnership between Auto2000 and SMKN 1 Cibinong.",
    solution:
      "A high-performance Full-Stack ecosystem integrating automated payments and notification workflows, designed to handle professional workshop standards.",
    highlights: [
      "Integrated Midtrans for automated billing and WAHA + n8n for real-time customer notification pipelines",
      "Architected a modular system to support professional service standards in collaboration with Auto2000",
      "Containerized with Docker to ensure seamless deployment and environment consistency across workshop operations",
    ],
    image: "/assets/img/millenium-service.png",
    github: "https://github.com/your-username/toolroom-tkr",
    external: "https://your-project-url.com",
    badge: ["Server offline"]
  },
  {
    title: "Secure Enterprise Audit & Reporting Ecosystem",
    category: "Reporting System",
    problem:
      "Need for a secure, centralized system to handle sensitive reports from public and employees with a strict audit trail.",
    solution:
      "Developed a cross-platform ecosystem (Web & Mobile) with a structured workflow engine and role-based access control for the Internal Audit division.",
    highlights: [
      "Engineered a secure document delivery pipeline with email-verified download links for confidential files",
      "Built a custom CMS and automated status workflow (Review, Revision, Resolved) to ensure data integrity",
      "Implemented a single-codebase mobile solution using Ionic & Capacitor for real-time reporting",
    ],
    image: "/assets/img/reporting.png",
    github: "",
    external: "",
    badge: ["Private Repository"]
  },
  {
    title: "HJC Digital Showroom & CMS",
    category: "Enterprise Content Management System",
    problem:
      "Managing dynamic vehicle catalogs, real-time pricing, and promotional events across a high-traffic public website.",
    solution:
      "Architected a centralized CMS to manage multi-entity data including car specifications, news & events, and dynamic pricing.",
    highlights: [
      "Designed a flexible data schema to handle complex vehicle specifications and variants across different models",
      "Streamlined the lead conversion process by integrating a seamless 'Test Drive' booking system",
      "Focused on high-performance content delivery to ensure fast loading times for the public-facing catalog",
    ],
    image: "/assets/img/web-hjc.png",
    github: "",
    external: "https://web-hjc.vercel.app",
    badge: ["Private Repository"]
  },
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">
            FEATURED PROJECTS
          </h2>
          <div className="mt-6 h-1 w-32 bg-accent/40" />
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "project-card group flex flex-col gap-16 lg:flex-row items-start",
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Image */}
              <div className="relative flex-1 w-full overflow-hidden rounded-3xl border border-white/5 glass aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="rounded-full bg-white/10 p-4 backdrop-blur-xl border border-white/10 hover:bg-accent/20 transition-all cursor-pointer">
                     <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                        <Github className="h-6 w-6" />
                     </a>
                  </div>
                  <div className="rounded-full bg-white/10 p-4 backdrop-blur-xl border border-white/10 hover:bg-accent/20 transition-all cursor-pointer">
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
                  {project.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
                
                <div className="mb-9 border rounded-lg px-2 text-zinc-400">
                  {project.badge.map((badge, index) => (
                    <span key={index} className="text-xs font-semibold tracking-wide">{badge}</span>
                  ))}
                </div>

                <div className="space-y-8 max-w-xl">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                      Challenge
                    </h4>
                    <p className="text-lg leading-relaxed text-zinc-400">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                      Solution
                    </h4>
                    <p className="text-lg leading-relaxed text-zinc-200">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">
                      Technical Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                          <span className="text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
