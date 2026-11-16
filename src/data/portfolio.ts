export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: string[];
  tech: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
}

export const personalInfo = {
  name: "Ahmed Omer",
  title: "Software Engineer",
  specialty: "Full-Stack Developer & AI Systems Builder",
  status: "Available for Software Engineering Roles & Global Remote",
  email: "tekisha5050@gmail.com",
  phone: "+251 954 148 842",
  location: "Kombolcha / Bati, Ethiopia",
  bio: "Full-Stack Software Engineer with proven experience designing mission-critical public-sector platforms, enterprise telecom applications, and high-throughput real-time systems. Specialized in React, TypeScript, Node.js, Python, and scalable backend architectures.",
  github: "https://github.com/ahma5050",
  linkedin: "https://linkedin.com/in/ahmedomer",
  portfolio: "https://ahmish-portfolio.vercel.app",
  image: "/photo.jpg",
  cv: "/Ahmed_Omer_CV.pdf",
};

export const stats = [
  { label: "Full-Stack Projects", value: "19+", description: "Production & open-source tools" },
  { label: "Data Performance", value: "+40%", description: "Query & processing optimization" },
  { label: "Task SLA Delivery", value: "99%", description: "Ethio Telecom enterprise record" },
  { label: "Hackathon Standing", value: "Top 3 / 50", description: "Qelem Meda National Hackathon" },
];

export const projects: ProjectItem[] = [
  {
    id: "bati-city-portal",
    title: "Bati City Digital Portal",
    category: "Public Sector · Municipal Services",
    tag: "Government / Web",
    description: "A centralized digital portal serving thousands of citizens and municipal departments with digitized documentation and real-time civic request workflows.",
    challenge: "Physical paperwork and fragmented municipal records caused multi-day turnaround times for basic citizen inquiries and certifications.",
    solution: "Engineered a secure, responsive full-stack municipal hub featuring citizen authentication, document tracking, and role-based department dashboards.",
    metrics: ["Thousands of citizen touchpoints", "Reduced query latency by 65%", "Zero downtime deployment"],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "attendance-management",
    title: "Smart Attendance & Workforce System",
    category: "Public Sector · Workforce Systems",
    tag: "Enterprise / Automation",
    description: "Automated biometric and digital attendance tracking system with real-time audit trails, automated monthly reporting, and anomaly alerts.",
    challenge: "Manual paper sign-ins resulted in payroll inaccuracies, unaccounted absences, and administrative overhead.",
    solution: "Built an automated workforce management platform with exportable payroll compliance reports, recognized formally by city administration.",
    metrics: ["100% automated logging", "Awarded Official Certificate of Recognition", "Saved 15+ admin hours/week"],
    tech: ["React.js", "Express.js", "MySQL", "Chart.js", "REST APIs"],
    featured: true,
  },
  {
    id: "file-management",
    title: "Municipal Digital Records & Archive",
    category: "Public Sector · Records Management",
    tag: "Security / Archival",
    description: "Enterprise document archiving and indexing system facilitating fast retrieval, version control, and tamper-resistant administrative tracking.",
    challenge: "Critical administrative records were vulnerable to physical degradation and lacked instant searchability across municipal offices.",
    solution: "Implemented an indexed digital registry with granular permissions, cryptographic verification, and instant full-text search.",
    metrics: ["Indexed 10,000+ official archives", "Sub-second record search", "Role-based access control"],
    tech: ["Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "ethio-telecom",
    title: "Ethio Telecom Core Internal Suite",
    category: "Telecommunications · Enterprise Suite",
    tag: "Telecom / Real-Time",
    description: "Contributed to 5+ full-stack enterprise internal modules including real-time web sockets chat, team task orchestrator, student evaluation, and automated router provisioning.",
    challenge: "Engineers faced repetitive manual router deployment routines and fragmented departmental communication during major rollouts.",
    solution: "Developed low-latency WebSocket communication engines and Python/Bash router automation scripts that slashed configuration time by 30%.",
    metrics: ["99% task completion rate", "30% faster router deployment", "5+ enterprise modules live"],
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Python", "Bash", "Java Spring Boot"],
    featured: true,
  },
  {
    id: "qelem-meda",
    title: "High-Throughput Real-Time Payroll",
    category: "Hackathon Winner · 3rd / 50 Teams",
    tag: "Fintech / High-Scale",
    description: "High-performance payroll processing platform with sub-second salary calculation, deductions validator, and dynamic financial charts.",
    challenge: "Batch payroll calculations in legacy systems bottlenecked under concurrent queries and complex multi-tier tax brackets.",
    solution: "Designed an event-driven architecture with React frontend and cached Node.js microservices, cutting computation overhead by 40%.",
    metrics: ["3rd Place out of 50 teams", "40% performance speedup", "Built in a 48h intensive sprint"],
    tech: ["React", "Node.js", "Redis", "REST APIs", "Agile Workflow"],
    featured: true,
  },
  {
    id: "wollo-one-card",
    title: "Wollo University One-Card Services",
    category: "Education Tech · University App Factory",
    tag: "Fintech / Campus",
    description: "Campus unified digital identity and payment service powering student authentication, campus dining, and university resource checkout.",
    challenge: "Students carried multiple physical tokens and cards for library, dining halls, and academic records.",
    solution: "Designed backend microservices and student-facing portal with fast QR/NFC validation and ledger tracking.",
    metrics: ["Supported university campus ecosystem", "Secure transaction verification", "Modular microservice API"],
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    featured: false,
  },
  {
    id: "ai-embedded",
    title: "Embedded AI & Edge Automation",
    category: "Research & Development · IoT",
    tag: "AI & Embedded",
    description: "Edge machine learning models and microcontroller firmware prototypes executing autonomous sensor triage and intelligent device control.",
    challenge: "Real-time edge decisions without constant cloud connectivity or heavy computational thermal footprints.",
    solution: "Built optimized C++ and MicroPython firmware running lightweight neural inference routines on low-power chips.",
    metrics: ["Sub-50ms inference on microcontrollers", "C++ memory optimized", "Autonomous telemetry"],
    tech: ["Python", "C++", "TensorFlow Lite", "ESP32", "MQTT"],
    featured: false,
  },
];

export const skills = [
  {
    category: "Languages & Core",
    icon: "code",
    items: [
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Java (Spring Boot)", level: 85 },
      { name: "C++", level: 80 },
      { name: "SQL (Postgres, MySQL)", level: 92 },
      { name: "Bash & Shell Scripting", level: 88 },
      { name: "PHP", level: 82 },
      { name: "HTML5 / Semantic CSS3", level: 95 },
    ],
  },
  {
    category: "Frontend Engineering",
    icon: "layout",
    items: [
      { name: "React.js & Next.js", level: 95 },
      { name: "Tailwind CSS & Shadcn UI", level: 95 },
      { name: "Three.js / WebGL 3D", level: 82 },
      { name: "Framer Motion & Animations", level: 90 },
      { name: "State Management (Zustand, Redux)", level: 88 },
      { name: "Responsive & Accessible UI", level: 96 },
    ],
  },
  {
    category: "Backend & Cloud",
    icon: "server",
    items: [
      { name: "Node.js & Express.js", level: 94 },
      { name: "Java Spring Boot", level: 85 },
      { name: "Socket.io (Real-Time)", level: 90 },
      { name: "RESTful & GraphQL APIs", level: 95 },
      { name: "PostgreSQL & MongoDB", level: 90 },
      { name: "Docker & Linux Servers", level: 86 },
      { name: "Git, GitHub & CI/CD", level: 92 },
    ],
  },
  {
    category: "AI & Embedded Systems",
    icon: "cpu",
    items: [
      { name: "Applied AI & LLM Systems", level: 88 },
      { name: "Microcontrollers (ESP32/Arduino)", level: 85 },
      { name: "Hardware-Software Interfacing", level: 86 },
      { name: "Automation & Scripting Pipelines", level: 92 },
      { name: "Network Infrastructure (Level 4)", level: 94 },
    ],
  },
];

export const experience = [
  {
    id: "bati-city-administration",
    role: "Software Developer & IT Systems Specialist",
    company: "Bati City Administration",
    badge: "Official Government Recognition",
    location: "Bati, Ethiopia",
    period: "May 2026 – Present",
    description: "Lead architect and developer for municipal digital modernization initiatives, establishing paperless civic operations and public services.",
    highlights: [
      "Architected, deployed, and continuously maintain the Bati City Digital Portal.",
      "Engineered an enterprise document archiving and file tracking system for municipal administrative records.",
      "Built and deployed the staff attendance management platform, officially honored with a Certificate of Recognition & Excellence.",
      "Standardized municipal data protection, backup procedures, and network security protocols.",
    ],
  },
  {
    id: "ethio-telecom",
    role: "Software Developer Intern",
    company: "Ethio Telecom",
    badge: "Enterprise Telecom",
    location: "Ethiopia",
    period: "July 2024 – October 2024",
    description: "Built full-stack internal enterprise tools and automated operational infrastructure deployment across departmental teams.",
    highlights: [
      "Engineered full-stack features for over 5 internal enterprise applications, achieving a stellar 99% task completion rate.",
      "Developed an internal real-time chat and team task management system using React, Node.js, and WebSockets.",
      "Authored Python and Bash automation scripts for router provisioning that accelerated deployment velocity by 30%.",
      "Automated evaluation workflows for student and intern tracking alongside payroll integration modules.",
    ],
  },
  {
    id: "freelance-app-factory",
    role: "Full-Stack Developer & Team Member",
    company: "Wollo University App Factory & Tech Club",
    badge: "Campus Innovation",
    location: "Kombolcha, Ethiopia",
    period: "2024 – 2025",
    description: "Developed university enterprise solutions, freelance platforms, and production systems for educational and community clients.",
    highlights: [
      "Engineered backend microservices for the Wollo University One-Card unified campus system.",
      "Implemented real-time messaging, video conference modules, and automated transactional emails.",
      "Designed and launched modern responsive commercial web solutions for local clients.",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Software Engineering",
  institution: "Wollo University",
  period: "2020 – 2025",
  gpa: "3.30 / 4.00",
  exitExam: "70%",
  honors: "App Factory Developer & Tech Innovation Club Lead",
};

export const certifications = [
  {
    title: "Certificate of Recognition & Excellence",
    issuer: "Bati City Administration",
    year: "2026",
    description: "Awarded for exceptional contribution to municipal digital transformation and automated workforce systems.",
  },
  {
    title: "Hardware and Networking Service (HNS) Level 4",
    issuer: "Federal TVET Agency / Ministry of Innovation & Technology",
    year: "Certified Competence",
    description: "Comprehensive national certification in network architecture, routing protocols, and hardware systems.",
  },
  {
    title: "3rd Place Honor - National Hackathon",
    issuer: "Qelem Meda Hackathon",
    year: "Selected out of 50 Teams",
    description: "Engineered a high-performance payroll engine with a 40% performance gain under intensive 48-hour competitive sprint.",
  },
];

export const languages = [
  { name: "Amharic", level: "Native Proficiency" },
  { name: "English", level: "Professional Working Proficiency / Fluent" },
];

export const terminalCommands: Record<string, string> = {
  help: "Available commands:\n- whoami       : Learn about Ahmed\n- skills       : Inspect technical skills\n- projects     : View featured software projects\n- experience   : Review career history\n- contact      : How to reach me\n- stats        : Key performance metrics\n- sudo hire    : Trigger instant hire modal\n- clear        : Clear this terminal",
  whoami: "Ahmed Omer — Full-Stack Software Engineer & AI Systems Developer based in Ethiopia. Passionate about high-impact municipal tech, real-time telecom architectures, and modern web platforms.",
  skills: "LANGUAGES: TypeScript, JavaScript, Python, Java, C++, SQL, Bash\nFRONTEND : React, Next.js, Tailwind, Shadcn, Three.js, Framer Motion\nBACKEND  : Node.js, Express, Spring Boot, WebSockets, REST APIs\nDATABASES: PostgreSQL, MongoDB, MySQL, Redis\nINFRA    : Docker, Linux, Git, Network Architecture (Level 4)",
  projects: "1. Bati City Portal (Municipal platform serving thousands)\n2. Ethio Telecom Internal Suite (WebSocket chat + router automation)\n3. Real-Time Payroll System (Hackathon 3rd Place / 50 teams, +40% speedup)\n4. Municipal File Archive (Tamper-resistant digital records)\n5. Smart Attendance Engine (Awarded Certificate of Recognition)",
  experience: "• Bati City Administration — Software Developer & IT Systems Specialist (May 2026 – Present)\n• Ethio Telecom — Software Developer Intern (July 2024 – Oct 2024, 99% task completion)\n• Wollo University App Factory — Full-Stack Developer (2024 – 2025)",
  stats: "• 19+ Full-Stack Projects\n• +40% Data Processing Speedup\n• 99% SLA Task Completion\n• Top 3 / 50 Hackathon Standing",
  contact: `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`,
};
