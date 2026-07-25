// src/data/resumeData.js

export const personalInfo = {
  name: "Athul Baburaj",
  title: "Cloud Solutions Engineer",
  company: "American Express",
  location: "Bengaluru",
  email: "athulbaburajp23@gmail.com",
  linkedin: "linkedin.com/in/athul-baburaj",
  github: "athulbaburaj",

  // Deliberately left blank: this repo is public, so filling these in would
  // disclose the role before it is announced. `announced` gates every UI use —
  // fill the strings and flip the flag together when it goes public.
  incomingRole: {
    title: "",
    company: "",
    announced: false
  }
};

export const skills = {
  programming: ["Python", "Java", "C++", "C#", "Go"],
  cloudDevOps: ["GCP", "AWS", "Docker", "Kubernetes", "OpenShift", "Terraform", "CI/CD", "Helm", "ArgoCD"],
  databases: ["PostgreSQL", "Cassandra", "PG Vector", "MongoDB"],
  machineLearning: ["LangChain", "PyTorch", "NLP", "LLM Fundamentals"],
  toolsFrameworks: ["Spring Boot", "Django", "Git", "Jenkins", "Linux"],
  softSkills: ["Team Leadership", "Technical Communication", "Rapid Prototyping", "Design Thinking"]
};

export const certifications = [
  "GCP Professional Cloud Architect",
  "GCP Associate Cloud Engineer",
  "ML Specialization (Andrew Ng)",
  "Game Dev (Michigan)"
];

export const experience = [
  {
    role: "Cloud Solutions Engineer",
    company: "American Express",
    location: "Bengaluru, India",
    period: "Aug 2023 - Present",
    points: [
      "Spearheaded migration of 70+ services from OCP 3.11 to 4.12, improving uptime by 20% and streamlining performance.",
      "Built and maintained Python automation services, including Code/Helm Validators and a Code Migration Automation tool, enhancing deployment workflows and operational efficiency.",
      "Took ownership of One Solutions audit services (batch and API), tracking Public Cloud onboardings and ensuring compliance.",
      "Served as Solutions Architect for multiple internal service mergers, aligning platforms and streamlining integration across teams."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "American Express",
    location: "Bengaluru, India",
    period: "May 2022 - Jun 2022",
    points: [
      "Built frontend for Cloud Migration Orchestrator on AWS; accelerated team POC delivery and tool integration.",
      "Optimized Cassandra data modeling in real use cases; reduced latency by 30% in query-intensive apps."
    ]
  }
];

export const education = [
  {
    institution: "NIT Calicut",
    degree: "B. Tech, Electrical and Electronics Engineering",
    period: "2019-2023",
    grade: "CGPA: 8.55",
    notes: "Relevant Coursework: Machine Learning, Cloud Computing, DSA, Computer Networks. Academic Highlight: First Class with Distinction"
  },
  {
    institution: "Chavara Public School (CBSE)",
    degree: "12th",
    period: "2018",
    grade: "93.8%"
  },
  {
    institution: "Chavara Public School (CBSE)",
    degree: "10th",
    period: "2016",
    grade: "CGPA 10"
  }
];

export const projects = [
  {
    title: "DC-DC Converter Reinforcement Learning",
    category: "Academic",
    featured: true,
    archived: false,
    year: "2023",
    summary: "Engineered an RL controller for boost converters using DDPG to handle CPLs; improved voltage stability under load shifts.",
    problem: "",
    role: "",
    approach: "This project focused on stabilizing DC-DC boost converters feeding Constant Power Loads (CPLs), which are notoriously unstable. I implemented a Deep Deterministic Policy Gradient (DDPG) agent in Python using PyTorch. The agent was trained to regulate output voltage dynamically against load transients, outperforming traditional PID controllers in simulation tests.",
    outcome: "",
    tech: ["Python", "Reinforcement Learning", "DDPG", "PyTorch", "Power Electronics"],
    link: "#",
    images: [
      "/images/rl-dc-dc/rl-dc-dc-1-diagram.png",
      "/images/rl-dc-dc/rl-dc-dc-diagram.png"
    ]
  },

  {
    title: "Personal Finance Tracker",
    category: "Personal",
    archived: true,
    year: "2020",
    summary: "Django-based application with data visualization for tracking personal expenses and budgeting.",
    problem: "",
    role: "",
    approach: "Developed a comprehensive finance tracking application using Django. Features include expense categorization, monthly budget setting, and interactive charts for visualizing spending habits. Implemented user authentication and data persistence with PostgreSQL.",
    outcome: "",
    tech: ["Django", "Python", "PostgreSQL", "Chart.js", "Bootstrap"],
    link: ""
  },
  {
    title: "Distributed Orchestrator (Nomad-Zero)",
    category: "Personal",
    featured: true,
    archived: false,
    year: "2024",
    summary: "A distributed OS-level process orchestrator using Linux Namespaces and Cgroups v2 for resource isolation.",
    problem: "",
    role: "",
    approach: "Built 'Nomad-Zero', a custom orchestration engine from scratch in Go. Implements OS-level isolation using Linux namespaces (PID, Mount) and Cgroups v2 for memory limits. Features a gRPC-based control plane with a Leader-Worker architecture and 'Least-Loaded' scheduling logic, demonstrating eventual consistency in distributed systems.",
    outcome: "",
    tech: ["Go", "gRPC", "Linux Kernel", "Protobuf", "Distributed Systems"],
    link: "https://github.com/athulbaburaj/distributed-computing",
    images: [
      "/images/nomad/cover.jpg"
    ]
  },
  {
    title: "Decentralized Voting System",
    category: "Personal",
    archived: true,
    year: "2021",
    summary: "Ethereum-based dApp using Solidity smart contracts for secure, transparent, and tamper-proof voting.",
    problem: "",
    role: "",
    approach: "Built a decentralized application (dApp) for voting on the Ethereum blockchain. Wrote smart contracts in Solidity to handle vote casting and tallying, ensuring immutability and transparency. The frontend interacts with the blockchain via Web3.js.",
    outcome: "",
    tech: ["Ethereum", "Solidity", "Web3.js", "React", "Blockchain"],
    link: ""
  },
  {
    title: "MUN Event Portal",
    category: "Personal",
    archived: true,
    year: "2022",
    summary: "React & Node.js platform for managing Model United Nations events, handling registrations, and scheduling.",
    problem: "",
    role: "",
    approach: "A full-stack web platform designed to streamline the organization of Model United Nations conferences. Features include delegate registration, committee allocation, dynamic scheduling, and an admin dashboard for event management.",
    outcome: "",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    link: ""
  },
  {
    title: "Arduino Smart Freshener (Tathva'19)",
    category: "Academic",
    archived: true,
    year: "2019",
    summary: "Built IoT-based automation prototype featured at Tathva Expo; introduced custom sensor trigger logic.",
    problem: "",
    role: "",
    approach: "An IoT prototype designed for smart home automation. Used Arduino Uno with ultrasonic and IR sensors to detect room occupancy and trigger air freshener sprays intelligently. The system included a custom delay logic to conserve refill usage and was showcased at the Tathva '19 technical exhibition.",
    outcome: "",
    tech: ["Arduino", "IoT", "C++", "Sensors", "Prototyping"],
    link: ""
  },
  {
    title: "Vince OS",
    category: "Personal",
    featured: true,
    archived: false,
    year: "2025",
    summary: "A locally-hosted agentic OS that acts as your Second Brain — AI memory, 3D knowledge graphs, task management, and content pipelines in one premium desktop app.",
    problem: "",
    role: "",
    approach: "Vince is a hybrid desktop application built with React + Tauri (Rust shell) and a Python FastAPI backend. It integrates deep AI memory via ChromaDB vector store, an interactive 3D knowledge graph that syncs live with your Obsidian Vault, an agentic chat powered by Google Gemini + Pydantic AI, a 5-stage Idea Vault kanban, a Content Pipeline for tracking posts and videos, and a Focus mode with streak tracking. Everything runs locally — your data never leaves your machine except for encrypted LLM inference calls.",
    outcome: "",
    tech: ["React", "Tauri (Rust)", "Python", "FastAPI", "Google Gemini", "ChromaDB", "SQLite"],
    // Intentionally unlinked: github.com/athulbaburaj/project-vince currently
    // holds an earlier Streamlit prototype, not the Tauri/FastAPI build described
    // here. Set this to that URL once the real code is pushed.
    link: "#",
    images: [
      "/images/vince/dashboard.png"
    ]
  },
  {
    title: "Valorant Scout",
    category: "Personal",
    featured: false,
    archived: false,
    year: "2025",
    summary: "Flask-powered Valorant scouting tool that pulls team performance data via the GRID Esports API and generates detailed PDF reports.",
    problem: "",
    role: "",
    approach: "Valorant Scout is a web app that lets analysts generate comprehensive scouting reports for Valorant teams. It connects to the GRID Esports API to fetch match history and performance data, processes it through a Flask backend, and renders a clean report with Jinja2 templates and Tailwind CSS. Reports can be exported as PDFs for sharing with coaching staff or team managers.",
    outcome: "",
    tech: ["Python", "Flask", "GRID Esports API", "Tailwind CSS", "Jinja2", "PDF Generation"],
    link: "https://github.com/athulbaburaj/haunt-py",
    images: [
      "/images/valorant-scout/dashboard.png"
    ]
  },
  {
    title: "Knight Day Fantasy (Retro Game)",
    category: "Personal",
    featured: false,
    archived: false,
    year: "2021",
    summary: "Designed and released a Unity-based platformer on itch.io with custom mechanics and retro pixel art; 2,000+ views on itch.io.",
    problem: "",
    role: "",
    approach: "A 2D pixel-art platformer developed in Unity (C#). Features include a custom physics engine for tight movement controls, a dynamic day-night cycle that affects gameplay mechanics, and original sprite work. The game drew over 2,000 views on itch.io and received positive community feedback for its level design.",
    outcome: "",
    tech: ["Unity", "C#", "Game Development", "Pixel Art", "Aseprite"],
    link: "#",
    liveLink: "https://godgb.itch.io/knightdayfantasy",
    images: [
      "/images/knightday/cover-art.png"
    ]
  }
];

export const leadership = [
  {
    role: "Assistant Secretary, Tech SIG - IPF",
    description: "Organized state-wide MUNs, workshops and competitions; grew participation by 30% year-over-year."
  },
  {
    role: "Senior Executive, Ragam 2022",
    description: "Led execution of 25+ cultural events for 5000+ participants; streamlined planning and issue resolution."
  },
  {
    role: "Joint Secretary, IEEE CS",
    description: "Launched Unity game dev workshop series; mentored 50+ students; hosted monthly tech events."
  }
];