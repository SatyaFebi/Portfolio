export interface Project {
   title: string;
   category: string;
   problem: string;
   solution: string;
   highlights: string[];
   image: string;
   github: string;
   external: string;
   badge: string[];
}

export const projects = [
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
    external: "/not-found",
    badge: ["Currently in development", "Server Offline"],
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
    github: "/not-found",
    external: "/not-found",
    badge: ["Server Offline", "Private Repository"]
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
    github: "/not-found",
    external: "/not-found",
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
    github: "/not-found",
    external: "https://web-hjc.vercel.app",
    badge: ["Private Repository"]
  },
];