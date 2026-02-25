"use client";

import { Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
              LET&apos;S
              <br />
              <span className="text-accent">CONNECT.</span>
            </h2>
            <p className="mt-8 text-xl text-zinc-400 font-light max-w-sm leading-relaxed">
              Currently open for new collaborations and exploring technical
              challenges.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-3">
                Email
              </h3>
              <a
                href="mailto:satyafebin@gmail.com"
                className="text-3xl font-bold hover:text-accent transition-colors"
              >
                satyafebin@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">
                Socials
              </h3>
              <div className="flex gap-6">
                {[
                  { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/satyafbi/" },
                  { icon: Instagram, label: "Instagram", link: "https://instagram.com/satyafbi" },
                  { icon: Github, label: "Github", link: "https://github.com/SatyaFebi" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center gap-4">
          <p className="text-xs text-zinc-600 tracking-widest hover:text-white transition-colors">
            © {new Date().getFullYear()} Satya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
