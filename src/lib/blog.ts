export interface Blog {
   title: string;
   date: string;
   tags: string[];
   url: string;
}

export const blogs = [
  {
    title: "Apakah Karier Kita Aman di Era AI?",
    date: "Sep 2025",
    tags: ["AI", "Career"],
    url: "https://medium.com/@satyaf/apakah-karier-kita-aman-di-era-ai-fc3ad51eba4a",
  },
//   {
//     title: "Why I Build Systems for Developers, Not Just Users: A Deep Dive into DX",
//     date: "Feb 2026",
//     tags: ["DX", "Architecture"],
//     url: "#",
//   },
  {
    title: "Reducing Latency in RAG Systems: From Architecture to Production",
    date: "Jan 2026",
    tags: ["AI", "RAG"],
    url: "#",
  },
  {
    title: "Dockerizing Laravel & Vue: Why Every Junior Needs a DevOps Mindset",
    date: "Jan 2026",
    tags: ["DevOps", "Docker"],
    url: "#",
  },
];