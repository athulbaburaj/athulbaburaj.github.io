// src/data/resumeData.js

export const personalInfo = {
  name: "Athul Baburaj",
  title: "Cloud Solutions Engineer",
  email: "athulbaburajp23@gmail.com",
  linkedin: "linkedin.com/in/athul-baburaj",
  github: "athulbaburaj"
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
    description: "Engineered an RL controller for boost converters using DDPG to handle CPLs; improved voltage stability under load shifts.",
    tech: ["Python", "Reinforcement Learning", "DDPG"],
    link: "#"
  },
  {
    title: "Knight Day Fantasy (Retro Game)",
    category: "Professional",
    description: "Designed and released a Unity-based platformer on itch.io with custom mechanics and retro pixel art; 2000+ plays recorded.",
    tech: ["Unity", "C#", "Game Development"],
    link: "YOUR_ITCH_IO_GAME_LINK_HERE"
  },
  {
    title: "Full Stack Dev (MUN, Web3, Finance Tracker)",
    category: "Academic",
    description: "Delivered 3 full-stack apps including a Django finance tracker, an Ethereum-based voting dApp, and a React event portal.",
    tech: ["Django", "Ethereum", "React", "Full Stack"],
    link: "https://github.com/athulbaburaj?tab=repositories"
  },
  {
    title: "Arduino Smart Freshener (Tathva'19)",
    category: "Academic",
    description: "Built IoT-based automation prototype featured at Tathva Expo; introduced custom sensor trigger logic.",
    tech: ["Arduino", "IoT", "Sensors"],
    link: "#"
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