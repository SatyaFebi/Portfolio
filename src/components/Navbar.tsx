"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import gsap from "@/lib/gsap";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0 },
        ease: "power4.inOut",
      });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: target,
          offsetY: 80,
        },
        ease: "power4.inOut",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, "#")}
            className="flex items-center gap-3 group"
          >
            <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center text-black font-black text-xl transition-transform group-hover:scale-110">
              S
            </div>
            <span className="text-2xl font-black tracking-tighter">
              SATYA<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-zinc-700 mx-2" />
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="rounded-full bg-white px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-black hover:bg-accent hover:text-white transition-all duration-300"
            >
              LET&apos;S TALK
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "md:hidden text-white p-2 relative z-[70] transition-opacity duration-300",
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-8 right-8 text-white p-2 hover:text-accent transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {navLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-3xl font-black uppercase tracking-tighter text-white hover:text-accent transition-all duration-300"
            style={{
              transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="mt-4 rounded-full bg-accent px-8 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 60}ms` : "0ms",
            opacity: isOpen ? 1 : 0,
          }}
        >
          LET&apos;S TALK
        </a>
      </div>
    </>
  );
}

