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
    details: "This project focused on stabilizing DC-DC boost converters feeding Constant Power Loads (CPLs), which are notoriously unstable. I implemented a Deep Deterministic Policy Gradient (DDPG) agent in Python using PyTorch. The agent was trained to regulate output voltage dynamically against load transients, outperforming traditional PID controllers in simulation tests.",
    tech: ["Python", "Reinforcement Learning", "DDPG", "PyTorch", "Power Electronics"],
    link: "#",
    status: "CLASSIFIED // COMPLETED",
    classification: "TOP SECRET",
    date: "2023",
    images: [
      "https://placehold.co/600x400/05080f/00e5ff?text=RL+Training+Graph",
      "https://placehold.co/600x400/05080f/00e5ff?text=Circuit+Schematic"
    ]
  },
  {
    title: "Knight Day Fantasy (Retro Game)",
    category: "Professional",
    description: "Designed and released a Unity-based platformer on itch.io with custom mechanics and retro pixel art; 2000+ plays recorded.",
    details: "A 2D pixel-art platformer developed in Unity (C#). Features include a custom physics engine for tight movement controls, a dynamic day-night cycle that affects gameplay mechanics, and original sprite work. The game achieved over 2000 plays on itch.io and received positive community feedback for its level design.",
    tech: ["Unity", "C#", "Game Development", "Pixel Art", "Aseprite"],
    link: "YOUR_ITCH_IO_GAME_LINK_HERE",
    status: "PUBLIC // DEPLOYED",
    classification: "UNCLASSIFIED",
    date: "2021",
    images: [
      "https://placehold.co/600x400/05080f/00e5ff?text=Gameplay+Screenshot",
      "https://placehold.co/600x400/05080f/00e5ff?text=Level+Design"
    ]
  },
  {
    title: "Personal Finance Tracker",
    category: "Personal",
    description: "Django-based application with data visualization for tracking personal expenses and budgeting.",
    details: "Developed a comprehensive finance tracking application using Django. Features include expense categorization, monthly budget setting, and interactive charts for visualizing spending habits. Implemented user authentication and data persistence with PostgreSQL.",
    tech: ["Django", "Python", "PostgreSQL", "Chart.js", "Bootstrap"],
    link: "https://github.com/athulbaburaj?tab=repositories",
    status: "ARCHIVED // COMPLETED",
    classification: "RESTRICTED",
    date: "2020",
    images: [
      "https://placehold.co/600x400/05080f/00e5ff?text=Finance+Dashboard",
      "https://placehold.co/600x400/05080f/00e5ff?text=Expense+Charts"
    ]
  },
  {
    title: "Decentralized Voting System",
    category: "Personal",
    description: "Ethereum-based dApp using Solidity smart contracts for secure, transparent, and tamper-proof voting.",
    details: "Built a decentralized application (dApp) for voting on the Ethereum blockchain. Wrote smart contracts in Solidity to handle vote casting and tallying, ensuring immutability and transparency. The frontend interacts with the blockchain via Web3.js.",
    tech: ["Ethereum", "Solidity", "Web3.js", "React", "Blockchain"],
    link: "https://github.com/athulbaburaj?tab=repositories",
    status: "ARCHIVED // DEPLOYED",
    classification: "CONFIDENTIAL",
    date: "2021",
    images: [
      "https://placehold.co/600x400/05080f/00e5ff?text=Voting+Interface",
      "https://placehold.co/600x400/05080f/00e5ff?text=Smart+Contract"
    ]
  },
  {
    title: "MUN Event Portal",
    category: "Personal",
    description: "React & Node.js platform for managing Model United Nations events, handling registrations, and scheduling.",
    details: "A full-stack web platform designed to streamline the organization of Model United Nations conferences. Features include delegate registration, committee allocation, dynamic scheduling, and an admin dashboard for event management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    link: "https://github.com/athulbaburaj?tab=repositories",
    status: "ARCHIVED // COMPLETED",
    classification: "UNCLASSIFIED",
    date: "2022",
    images: [
      "https://placehold.co/600x400/05080f/00e5ff?text=Event+Dashboard",
      "https://placehold.co/600x400/05080f/00e5ff?text=Registration+Flow"
    ]
  },
  {
    title: "Arduino Smart Freshener (Tathva'19)",
    category: "Academic",
    description: "Built IoT-based automation prototype featured at Tathva Expo; introduced custom sensor trigger logic.",
    details: "An IoT prototype designed for smart home automation. Used Arduino Uno with ultrasonic and IR sensors to detect room occupancy and trigger air freshener sprays intelligently. The system included a custom delay logic to conserve refill usage and was showcased at the Tathva '19 technical exhibition.",
    tech: ["Arduino", "IoT", "C++", "Sensors", "Prototyping"],
    link: "#",
    status: "PROTOTYPE // DEMO",
    classification: "INTERNAL",
    date: "2019",
    images: [
      "https://placehold.co/600x400/05080f/00e5ff?text=Hardware+Setup",
      "https://placehold.co/600x400/05080f/00e5ff?text=Expo+Demo"
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