import { Code2, Cpu, Container, LayoutGrid } from "lucide-react";

export interface Stacks {
   name: string;
   icon: string;
   tools: string[];
   
}

export const stacks = [
  {
    name: "Core",
    icon: Code2,
    tools: [
      "PHP (Laravel)",
      "JavaScript (Vue.js, Next.js, React.js)",
      "Python (AI/ML)",
      "Ionic & Capacitor (Mobile)",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    name: "AI / Data",
    icon: Cpu,
    tools: ["RAG Architecture", "Vector DBs", "LLM Orchestration", "LangChain"],
  },
  {
    name: "Tools",
    icon: Container,
    tools: [
      "Docker",
      "Git / GitHub",
      "Notion",
      "Ubuntu",
      "n8n",
      "Figma",
      "Postman",
      "WAHA (WhatsApp API)",
    ],
  },
  //   {
  //     name: "Architecture",
  //     icon: LayoutGrid,
  //     tools: ["Clean Architecture", "Modular Monolith", "RESTful API Design", "Service Layer Pattern"],
  //   },
];