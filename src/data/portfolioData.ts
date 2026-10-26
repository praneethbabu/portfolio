export interface Project {
  id: string;
  title: string;
  tag: string;
  category: "All" | "AI & Products" | "Production Platforms" | "In Progress" | "Client & Demonstrations";
  status: "Live Production" | "Live" | "In Progress" | "AI Concept / MVP" | "Demonstration";
  type: string;
  blurb: string;
  details: string;
  role: string;
  emphasis: string;
  link: string | null;
  image: string;
  featuredMetric: string;
  stack: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  summary?: string;
  pillars?: {
    title: string;
    items: string[];
  }[];
  points: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean; production?: boolean }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  deliverables: string[];
  tech: string[];
  image: string;
}

export const PERSONAL_INFO = {
  name: "Praneeth Babu Yeddula",
  shortName: "Praneeth Babu",
  initials: "PBY",
  title: "Senior Software Engineer | AI Generalist | Technical Program Lead",
  heroHeadline: "Engineering Intelligent Solutions. Building What Comes Next.",
  heroSubtitle:
    "I build intelligent applications, AI-powered products, and scalable web platforms — turning ideas into practical technology solutions.",
  heroPills: [
    "Full-Stack Development",
    "Generative AI",
    "AI Agents",
    "Cloud & DevOps",
  ],
  roles: [
    "Senior Software Engineer",
    "AI Product Builder",
    "Technical Program Lead",
    "Technology Educator",
  ],
  tagline: "From Code to AI Products — Turning Ideas into Reality.",
  location: "Andhra Pradesh, India",
  email: "praneethbabu2003@gmail.com",
  phone: "+91 63050 52434",
  phoneDisplay: "+91 63050 52434",
  availability: "Available for engineering, AI product & leadership roles",
  github: "https://github.com/praneethbabu",
  linkedin: "https://linkedin.com/in/praneeth-babu-yeddula",
  canonicalUrl: "https://praneethbabu.vercel.app/",
  profileImage: "https://praneethbabu.vercel.app/praneeth-babu-yeddula.jpg",
  ogImage: "https://praneethbabu.vercel.app/og-image.jpg",
  company: "Brainovision Solutions India Pvt. Ltd.",
  companyUrl: "https://brainovision.in",
  bioParagraphs: [
    "I am Praneeth Babu Yeddula, a Senior Software Engineer, AI Generalist, Technical Program Lead, and technology educator passionate about building intelligent software solutions and making emerging technologies accessible to the next generation of engineers.",
    "My work brings together full-stack software development, artificial intelligence, generative AI, cloud computing, and technical education. I enjoy transforming ideas into functional applications, developing AI-powered products, solving practical engineering challenges, and exploring how intelligent automation can improve the way people work and learn.",
    "As part of my professional journey at Brainovision Solutions India Pvt. Ltd., I have been involved in software development, technology programs, technical training, and educational technology initiatives. My work spans business websites, certificate generation and verification systems, careers platforms, internship-related platforms, and emerging AI-driven products.",
    "My software engineering experience covers the entire development lifecycle, including frontend interfaces, backend services, REST APIs, database integration, application architecture, deployment, and production troubleshooting. I work with technologies such as React.js, JavaScript, Node.js, Express.js, Java, Spring Boot, Python, MySQL, and MongoDB. I also work with cloud infrastructure and deployment tools to manage applications reliably beyond local environments.",
    "Artificial intelligence is an important part of my current professional direction. I actively build with generative AI, large language models (LLMs), retrieval-augmented generation (RAG), AI agents, prompt engineering, and intelligent automation. I focus on integrating AI capabilities into practical software products, educational platforms, and automated workflows.",
    "Beyond engineering, I am passionate about technology education and community building. Across my work, I have trained more than 10,000 students, delivered over 100 technical workshops, and participated in organizing, mentoring, and evaluating more than 20 hackathons. These experiences have helped me connect complex technical concepts with practical implementation through live demonstrations, hands-on coding, project-based learning, and industry-oriented discussions.",
    "I believe technology is most valuable when it solves real problems. Whether I am developing a web application, exploring an AI-powered product, deploying a high-concurrency cloud service, or mentoring students, my goal is to combine continuous learning with disciplined execution.",
  ],
  missionStatement:
    "I believe the future belongs to people who can combine strong engineering fundamentals with creativity, continuous learning, and the practical application of artificial intelligence. My goal is to build meaningful software products, explore new possibilities in AI, and create learning experiences that empower others to become confident developers and problem-solvers. I want to keep bridging the gap between learning and implementation — turning ideas into working technology and helping more people participate in building the future.",
  contactHeading: "Let's Build Something Meaningful",
  contactSubtext:
    "I'm interested in connecting with engineers, founders, technology teams, educational institutions, and innovators who want to build practical software solutions and explore the potential of AI. Whether you're interested in software development, AI-powered products, technical collaboration, workshops, or speaking opportunities, I'd be happy to connect. Let's turn ideas into working solutions.",
};

export const METRICS = [
  {
    value: "10,000+",
    label: "Students Trained",
    subtext: "Conducted hands-on technical bootcamps across premier colleges & universities",
  },
  {
    value: "100+",
    label: "Technical Workshops",
    subtext: "Full-stack development, GenAI, cloud infrastructure & emerging tech sessions",
  },
  {
    value: "20+",
    label: "Hackathons Mentored",
    subtext: "Organized, mentored, and evaluated national innovation competitions",
  },
  {
    value: "100K+",
    label: "Peak Traffic Spike",
    subtext: "Sustained national result concurrency spikes on AWS EC2 & Nginx with zero downtime",
  },
  {
    value: "10,000+",
    label: "Certificates Automated",
    subtext: "Bulk credentialing pipeline with cryptographic validation and instant verification",
  },
  {
    value: "Multi-State",
    label: "Program Reach",
    subtext: "Delivered technical learning initiatives across multiple Indian states",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Application Development",
    shortTag: "Web & Enterprise",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    description:
      "End-to-end architecture and engineering of responsive web applications, robust REST APIs, secure database schemas, and high-concurrency internal business portals.",
    deliverables: [
      "Custom business portals & corporate web platforms",
      "High-performance REST API services & microservices",
      "Database schema modeling, indexing & optimization",
      "Enterprise authentication (JWT, RBAC) & security",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Java", "Spring Boot", "MySQL", "MongoDB"],
  },
  {
    id: "ai-products",
    title: "AI Integration & Product Development",
    shortTag: "GenAI & Agents",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    description:
      "Transforming LLMs and generative AI into practical software products — building custom AI assistants, document-aware RAG pipelines, and intelligent automated workflows.",
    deliverables: [
      "LLM API integration & prompt engineering architecture",
      "Document retrieval & RAG (Retrieval-Augmented Generation)",
      "Autonomous AI agents & intelligent task automation",
      "Custom conversational interfaces & messaging automation",
    ],
    tech: ["Generative AI", "LLMs", "RAG", "AI Agents", "Python", "Prompt Engineering"],
  },
  {
    id: "cloud-devops",
    title: "Cloud Deployment & DevOps",
    shortTag: "AWS & Systems",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    description:
      "Production infrastructure provisioning, Linux server administration, reverse proxy tuning, zero-downtime CI/CD pipelines, and troubleshooting under high concurrency.",
    deliverables: [
      "AWS EC2, S3, Route53 DNS & Cloudflare setup",
      "Nginx reverse proxy, micro-caching & SSL certificate automation",
      "Docker containerization & process management with PM2",
      "Automated CI/CD workflows using GitHub Actions",
    ],
    tech: ["AWS", "Docker", "Linux", "Nginx", "PM2", "GitHub Actions", "Cloudflare"],
  },
  {
    id: "training-mentorship",
    title: "Technical Training & Workshops",
    shortTag: "Education & Speaking",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    description:
      "Industry-aligned, project-driven bootcamps and intensive technical workshops for universities, developer communities, and organizations.",
    deliverables: [
      "Full-stack MERN & Java Spring Boot masterclasses",
      "Generative AI & LLM application building workshops",
      "Hands-on coding exercises, live demos & capstone reviews",
      "Hackathon problem formulation, judging & team mentorship",
    ],
    tech: ["MERN Stack", "Java Full-Stack", "GenAI", "Cloud & DevOps", "Curriculum Design"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bscgs",
    title: "BSCGS — Certificate Generation & Verification",
    tag: "Company Platform · Live",
    category: "Production Platforms",
    status: "Live Production",
    type: "Company Platform · Brainovision",
    blurb:
      "Production company platform engineered for batch digital certificate generation and tamper-proof verification with cryptographic validation IDs.",
    details:
      "Designed and deployed the end-to-end credentialing engine. Features bulk asynchronous rendering with dynamic recipient metadata, unique verification QR codes, and a public portal enabling employers and academic institutions to verify certificate authenticity in real time. Deployed on VPS with Nginx and PM2.",
    role: "Full-Stack Developer & Cloud Lead",
    emphasis:
      "Certificate management, digital verification workflows, and business application development.",
    link: "https://bcgs.brainovision.in",
    image: "/bcgs.webp",
    featuredMetric: "10,000+ Certificates Verified",
    stack: ["Node.js", "Express.js", "Canvas API", "MySQL", "QR Verification", "Nginx", "PM2"],
  },
  {
    id: "brainovision-careers",
    title: "Brainovision Careers Platform",
    tag: "Recruitment · Live",
    category: "Production Platforms",
    status: "Live Production",
    type: "Recruitment Platform · Brainovision",
    blurb:
      "Digital recruitment and talent acquisition platform facilitating structured job openings, candidate application workflows, and automated resume intake.",
    details:
      "Built modern frontend interfaces and integrated backend APIs to streamline candidate discovery, application processing, and recruitment team dashboards. Handled database persistence, file uploads for applicant portfolios, and domain SSL configuration.",
    role: "Full-Stack Developer",
    emphasis:
      "Business-oriented web development, recruitment workflows, and candidate pipeline automation.",
    link: "https://careers.brainovision.in",
    image: "/brainovision.webp",
    featuredMetric: "Live Recruitment Funnel",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "aegis-support",
    title: "Aegis Support (Australia)",
    tag: "Personal Project · Live",
    category: "Client & Demonstrations",
    status: "Live",
    type: "Personal Project · Client Solution",
    blurb:
      "Professional IT support and managed services web platform built for an Australian client with clean UI, strict WCAG accessibility, and cloud deployment.",
    details:
      "Engineered responsive user interface from design specifications, ensuring fast load performance, semantic accessibility for screen readers, and zero-configuration serverless hosting. Configured custom domain routing, SSL encryption, and contact integration.",
    role: "Independent Software Engineer",
    emphasis:
      "Personal initiative, international client communication, WCAG accessibility, and deployment execution.",
    link: "https://aegissupport.com.au",
    image: "/aegis.webp",
    featuredMetric: "International Client System",
    stack: ["React.js", "Tailwind CSS", "WCAG a11y", "Vercel", "DNS & SSL"],
  },
  {
    id: "principlabs-lms",
    title: "Principlabs LMS",
    tag: "EdTech · In Progress",
    category: "In Progress",
    status: "In Progress",
    type: "Education Technology · Under Development",
    blurb:
      "Modern Learning Management System under active development for the educational technology ecosystem, focusing on modular course delivery and learner tracking.",
    details:
      "Architecting the product foundation with scalable course catalogs, video lesson progression tracking, assignment submissions, interactive quizzes, and instructor analytics dashboards. Engineered with modular API services and responsive React interfaces.",
    role: "Product Architect & Lead Developer",
    emphasis:
      "Product architecture, course delivery, learner experience, student progress tracking, and educational content workflows.",
    link: "https://principlabs.com",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    featuredMetric: "In Active Development",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "flowpilot-whatsapp",
    title: "FlowPilot — WhatsApp Automation",
    tag: "AI & Automation · In Progress",
    category: "AI & Products",
    status: "In Progress",
    type: "AI & Business Automation · Under Development",
    blurb:
      "Customizable messaging automation platform integrating Meta WhatsApp Business Platform, webhook processing, and configurable conversational flows.",
    details:
      "Developing an event-driven automation engine to manage automated responses, user intent routing, webhook notification handling, and customer messaging workflows for small-to-medium businesses. Integrates with LLM API backends for smart reply generation.",
    role: "Creator & Backend Engineer",
    emphasis:
      "API integration, event-driven backend design, workflow automation, and messaging systems.",
    link: null,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    featuredMetric: "Event-Driven Messaging Engine",
    stack: ["Node.js", "Meta Cloud API", "Webhooks", "Express.js", "LLM APIs", "Redis"],
  },
  {
    id: "problemforge",
    title: "ProblemForge — AI Hackathon Engine",
    tag: "AI Concept · MVP",
    category: "AI & Products",
    status: "AI Concept / MVP",
    type: "AI Product Concept · MVP Prototype",
    blurb:
      "AI-powered problem statement generator tailored for hackathons, technical bootcamps, and developer evaluations with domain-specific difficulty tuning.",
    details:
      "Concept and MVP prototype built using Python and LLM API integrations. Generates structured, industry-aligned hackathon problem statements complete with evaluation criteria, sample datasets, and judging rubrics. Utilizes embedding storage for semantic deduplication.",
    role: "AI Product Builder",
    emphasis:
      "LLM integration, AI-assisted content generation, data organization, and product design.",
    link: null,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    featuredMetric: "AI-Assisted Challenge Design",
    stack: ["Python", "OpenAI / Claude API", "MySQL", "Vector Embeddings", "FastAPI"],
  },
  {
    id: "beea-awards",
    title: "BEEA — Bharat Education Excellence Awards",
    tag: "High Scale · Cloud",
    category: "Production Platforms",
    status: "Live Production",
    type: "Company Platform · Brainovision",
    blurb:
      "High-traffic national production awards platform engineered to withstand 50K–100K peak concurrent visitors during live announcement spikes.",
    details:
      "Architected backend infrastructure with Node.js and Express running on AWS EC2. Configured reverse proxy with Nginx micro-caching and connection pooling to ensure zero server downtime during sudden nationwide traffic surges.",
    role: "Cloud & Systems Engineer",
    emphasis:
      "High concurrency resilience, AWS EC2, Nginx reverse proxy, and zero-downtime reliability.",
    link: "https://beea.in",
    image: "/beea.webp",
    featuredMetric: "100K Concurrent Spike",
    stack: ["Node.js", "Express.js", "AWS EC2", "Nginx", "MongoDB", "Linux"],
  },
  {
    id: "brainovision-corporate",
    title: "Brainovision Corporate Platform",
    tag: "Enterprise Web · Live",
    category: "Production Platforms",
    status: "Live Production",
    type: "Company Platform · Brainovision",
    blurb:
      "Flagship web portal powering Brainovision's institutional programs, technical course catalog, partner network, and student enrollment funnel.",
    details:
      "Constructed modular component architecture in React, focused on responsive layouts, asset preloading, search engine visibility, and lead capture workflows.",
    role: "Full-Stack Developer",
    emphasis:
      "Corporate web engineering, design system implementation, and performance optimization.",
    link: "https://brainovision.in",
    image: "/brainovision.webp",
    featuredMetric: "Flagship Corporate Web",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "SEO Optimization"],
  },
  {
    id: "techedge",
    title: "TechEdge Learning Portal",
    tag: "EdTech · Live",
    category: "Production Platforms",
    status: "Live Production",
    type: "Company Platform · Brainovision",
    blurb:
      "Specialized technology initiative portal supporting intensive bootcamps, cohort onboarding, and curriculum delivery across technical institutions.",
    details:
      "Deployed and configured application services, student registration pipelines, and course collateral delivery systems on Linux cloud infrastructure.",
    role: "Full-Stack Developer & Deployment Lead",
    emphasis:
      "Educational portal delivery, student registration pipelines, and production hosting.",
    link: "https://techedge.brainovision.in",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    featuredMetric: "Multi-Cohort Delivery",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "PM2", "Nginx"],
  },
  {
    id: "brainovision-internships",
    title: "Brainovision Internship Platform",
    tag: "EdTech · Live",
    category: "Production Platforms",
    status: "Live Production",
    type: "Company Platform · Brainovision",
    blurb:
      "Dedicated web portal connecting thousands of college students with structured industry internship programs, project submissions, and track evaluations.",
    details:
      "Contributed to student workflow dashboards, internship application tracking, project deliverable reviews, and administrative cohort management.",
    role: "Full-Stack Developer",
    emphasis:
      "Student tracking, workflow dashboards, and internship lifecycle management.",
    link: "https://internships.brainovision.in",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    featuredMetric: "Thousands of Intern Applicants",
    stack: ["React.js", "Node.js", "REST APIs", "MySQL", "Tailwind CSS"],
  },
  {
    id: "mana-kirana-kottu",
    title: "Mana Kirana Kottu — SaaS Platform",
    tag: "SaaS · Multi-Tenant",
    category: "Client & Demonstrations",
    status: "Demonstration",
    type: "Demonstration Project · SaaS Architecture",
    blurb:
      "Multi-tenant Kirana store SaaS application enabling localized inventory management, product pricing, billing workflows, and customer invoicing.",
    details:
      "Designed full relational schema with Prisma ORM and MySQL. Implemented multi-tenant data separation, tenant authentication, order creation pipelines, and inventory tracking.",
    role: "Full-Stack Engineer",
    emphasis:
      "Multi-tenant architecture, Prisma ORM, relational database design, and SaaS product engineering.",
    link: null,
    image: "https://images.unsplash.com/photo-1556742049-0a67e557224e?auto=format&fit=crop&w=1200&q=80",
    featuredMetric: "Multi-Tenant Schema",
    stack: ["React.js", "Express.js", "Prisma ORM", "MySQL", "JWT Auth"],
  },
  {
    id: "microfinance-system",
    title: "Microfinance Management System",
    tag: "Enterprise · Java",
    category: "Client & Demonstrations",
    status: "Demonstration",
    type: "Demonstration Project · Java Architecture",
    blurb:
      "Enterprise financial application modeling micro-lending lifecycles, EMI calculation schedules, disbursement tracking, and customer repayment records.",
    details:
      "Constructed using Java and Spring Boot. Implemented strict object-oriented patterns, transactional data integrity, account ledger audit trails, and RESTful service endpoints.",
    role: "Backend Engineer",
    emphasis:
      "Enterprise Java, Spring Boot microservice design, transactional integrity, and REST APIs.",
    link: null,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featuredMetric: "Spring Boot Microservice",
    stack: ["Java", "Spring Boot", "MySQL", "JPA / Hibernate", "REST APIs"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Senior Software Engineer | AI Generalist | Technical Program Lead",
    company: "Brainovision Solutions India Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Jun 2025 — Present",
    badge: "Current Role",
    summary:
      "Leading technical initiatives across full-stack software development, emerging AI products, cloud infrastructure, and national technical education programs.",
    pillars: [
      {
        title: "Software Engineering & Product Development",
        items: [
          "Develop and maintain production web applications and digital platforms for business and education use cases.",
          "Work across frontend development, backend APIs, database integration, and resilient application architecture.",
          "Contribute to corporate portals, careers systems, internship platforms, and digital certificate generation & verification solutions (BSCGS).",
          "Explore and develop AI-powered applications and intelligent workflow automation products.",
          "Troubleshoot complex production issues across databases, APIs, Linux server configuration, DNS, SSL, and reverse proxies.",
        ],
      },
      {
        title: "Cloud Infrastructure & Deployment",
        items: [
          "Manage VPS hosting, Linux environments, Nginx reverse proxy configurations, and PM2 process clustering.",
          "Configure apex domains, subdomains, reverse proxies, and automated SSL/TLS encryption certificates.",
          "Establish Git and GitHub-based collaborative workflows and explore CI/CD automation pipelines.",
          "Work with AWS cloud services (EC2, S3, Route53) and Docker containerization for reliable deployments.",
        ],
      },
      {
        title: "Technical Training & Program Leadership",
        items: [
          "Deliver technical workshops covering full-stack development, generative AI, cloud computing, and emerging tech.",
          "Develop practical learning curricula, project demonstrations, hands-on coding exercises, and industry-oriented syllabi.",
          "Support national hackathons, innovation challenges, and hands-on developer mentoring initiatives.",
          "Bridge the gap between academic theory and practical software engineering through live coding and project-based instruction.",
        ],
      },
    ],
    points: [
      "Architected and deployed BSCGS certificate verification engine, processing 10,000+ digital credentials with cryptographic QR validation.",
      "Engineered high-concurrency cloud infrastructure on AWS EC2 & Nginx sustaining 50K–100K visitor spikes with zero downtime (BEEA Awards).",
      "Head trainer and technical mentor across national cohorts, directly training 10,000+ students across 100+ workshops and 20+ hackathons.",
      "Developing emerging AI products and automation tools, including FlowPilot (WhatsApp messaging automation) and ProblemForge (AI hackathon challenge generator).",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Python",
      "AWS EC2",
      "Nginx",
      "Docker",
      "MySQL",
      "MongoDB",
      "Generative AI",
    ],
  },
  {
    role: "Junior Developer Intern",
    company: "Brainovision Solutions India Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Apr 2025 — Jun 2025",
    points: [
      "Integrated React UI components with RESTful backend endpoints across internal enterprise management systems.",
      "Assisted senior engineers with cloud deployments, bug troubleshooting, API regression tests, and SQL/NoSQL query tuning.",
      "Built reusable responsive interface components and handled client-side form validation and state management.",
    ],
    tech: ["React.js", "REST APIs", "Node.js", "MySQL", "Git", "Bug Tracking"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Brainovision Solutions India Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Jan 2025 — Mar 2025",
    points: [
      "Completed intensive full-stack engineering program covering Java, Spring Boot, React, and cloud deployment principles.",
      "Designed and shipped 3 end-to-end applications demonstrating clean object-oriented architecture, database relationships, and REST APIs.",
      "Gained hands-on experience in Linux environments, database migrations, and Git collaborative version control.",
    ],
    tech: ["Java", "Spring Boot", "React.js", "MongoDB", "REST APIs", "Git"],
  },
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Engineering",
  institution: "G. Pulla Reddy Engineering College",
  period: "Graduated",
  location: "Kurnool, Andhra Pradesh, India",
  description:
    "Gained a strong foundation in computer science fundamentals, data structures, algorithms, object-oriented programming, database management systems, and software engineering. Progressed from academic learning to building business web applications, exploring generative AI, deploying cloud infrastructure, and training thousands of students across the country.",
  highlights: [
    "Core focus in Data Structures, Algorithms, Software Engineering & Database Systems",
    "Transitioned directly into production software development and national technical training",
    "Continuous practical self-driven exploration in Generative AI, LLMs, and Cloud Systems",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Artificial Intelligence",
    iconName: "Sparkles",
    description:
      "Generative AI tooling, large language model integrations, RAG architecture, and autonomous intelligent automation",
    skills: [
      { name: "Generative AI", highlight: true, production: true },
      { name: "LLMs (Large Language Models)", highlight: true, production: true },
      { name: "Prompt Engineering", highlight: true, production: true },
      { name: "RAG (Retrieval-Augmented Gen)", highlight: true, production: true },
      { name: "AI Agents", highlight: true, production: true },
      { name: "LLM API Integration", highlight: true, production: true },
      { name: "Intelligent Automation", highlight: true, production: true },
    ],
  },
  {
    title: "Full-Stack Development",
    iconName: "Layers",
    description:
      "Modern component-driven frontends, resilient backend services, and scalable server-side microservices",
    skills: [
      { name: "React.js", highlight: true, production: true },
      { name: "JavaScript (ES6+)", highlight: true, production: true },
      { name: "HTML5 & CSS3", production: true },
      { name: "Bootstrap", production: true },
      { name: "Node.js", highlight: true, production: true },
      { name: "Express.js", highlight: true, production: true },
      { name: "Java", highlight: true, production: true },
      { name: "Spring Boot", highlight: true, production: true },
      { name: "Python", highlight: true, production: true },
      { name: "Django", production: false },
    ],
  },
  {
    title: "Databases and APIs",
    iconName: "Database",
    description:
      "Relational and document storage, schema design, secure token authentication, and high-speed API endpoints",
    skills: [
      { name: "MySQL", highlight: true, production: true },
      { name: "MongoDB", highlight: true, production: true },
      { name: "SQLite", production: true },
      { name: "Prisma ORM", highlight: true, production: true },
      { name: "REST APIs", highlight: true, production: true },
      { name: "JWT Authentication", highlight: true, production: true },
    ],
  },
  {
    title: "Cloud and DevOps",
    iconName: "Cloud",
    description:
      "Cloud infrastructure provisioning, containerization, reverse proxy routing, and automated deployment pipelines",
    skills: [
      { name: "AWS (EC2, S3, Route53)", highlight: true, production: true },
      { name: "Docker", highlight: true, production: true },
      { name: "Linux Administration", highlight: true, production: true },
      { name: "Nginx Reverse Proxy", highlight: true, production: true },
      { name: "PM2 Process Manager", highlight: true, production: true },
      { name: "Git & GitHub", highlight: true, production: true },
      { name: "GitHub Actions CI/CD", highlight: true, production: true },
      { name: "Cloudflare", production: true },
    ],
  },
];

export const TRAINING_SECTION = {
  headline: "Empowering Developers Through Practical Technology Education",
  subtext:
    "Alongside my software engineering work, I am passionate about teaching, mentoring, and helping students develop industry-relevant technical skills. My experience includes conducting hands-on technical workshops, delivering programming demonstrations, preparing structured curricula, and mentoring students through practical software projects.",
  approach:
    "My approach emphasizes learning by building: understanding concepts, writing code, integrating components, debugging real problems, and deploying working applications.",
  highlights: [
    {
      metric: "10,000+",
      title: "Students Trained",
      desc: "Delivered hands-on technical bootcamps across engineering colleges and universities.",
    },
    {
      metric: "100+",
      title: "Technical Workshops",
      desc: "Conducted intensive sessions on full-stack development, AI, cloud computing, and emerging tech.",
    },
    {
      metric: "20+",
      title: "Hackathons Mentored",
      desc: "Participated in organizing, mentoring, and evaluating competitive innovation hackathons.",
    },
    {
      metric: "Multi-State",
      title: "National Reach",
      desc: "Conducted technical learning programs across multiple Indian states and university hubs.",
    },
    {
      metric: "100%",
      title: "Hands-On & Project-Based",
      desc: "Developed practical coding exercises, architecture blueprints, and real-world deployment labs.",
    },
    {
      metric: "Industry",
      title: "Bridging the Gap",
      desc: "Helped students connect academic concepts with live software engineering and artificial intelligence.",
    },
  ],
  topics: [
    {
      name: "MERN Stack and Java Full-Stack Development",
      category: "Full-Stack",
      desc: "Component architecture, REST APIs, relational & NoSQL databases, and end-to-end integration.",
    },
    {
      name: "Generative AI and Prompt Engineering",
      category: "AI & ML",
      desc: "Prompt patterns, system instructions, LLM fine-tuning concepts, and productivity acceleration.",
    },
    {
      name: "Large Language Models and RAG",
      category: "AI & ML",
      desc: "Document embeddings, vector databases, retrieval-augmented workflows, and contextual QA systems.",
    },
    {
      name: "AI Agents and Intelligent Automation",
      category: "AI & ML",
      desc: "Autonomous agent architectures, tool calling, function execution, and multi-step workflows.",
    },
    {
      name: "REST API Development and Database Integration",
      category: "Backend",
      desc: "API contract design, JWT authentication, MySQL & MongoDB indexing, and data validation.",
    },
    {
      name: "AWS, Docker, DevOps, and Application Deployment",
      category: "Cloud",
      desc: "Linux server provisioning, Docker containers, Nginx reverse proxy, SSL, and automated CI/CD.",
    },
    {
      name: "Project Development and Industry-Oriented Software Engineering",
      category: "Practical",
      desc: "Clean code practices, debugging techniques, code reviews, and shipping functional portfolio software.",
    },
  ],
};

export const MARQUEE_ITEMS = [
  "Senior Software Engineer",
  "AI Product Builder",
  "Technical Program Lead",
  "Technology Educator",
  "React.js",
  "Java & Spring Boot",
  "Generative AI",
  "AI Agents",
  "RAG Systems",
  "Node.js & Express",
  "AWS Cloud & Nginx",
  "Docker & DevOps",
  "MySQL & MongoDB",
  "10,000+ Students Mentored",
  "100+ Technical Workshops",
];

export interface WorkshopPhoto {
  id: string;
  title: string;
  tag: string;
  reach: string;
  image: string;
  caption: string;
}

export const WORKSHOP_GALLERY: WorkshopPhoto[] = [
  {
    id: "hackathons",
    title: "20+ National Hackathons Mentored & Judged",
    tag: "Hackathon Evaluation",
    reach: "5,000+ Innovators",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    caption: "Mentoring student teams through intense 24-48hr hackathons — guiding problem formulation, API design, and live judging.",
  },
  {
    id: "bootcamps",
    title: "100+ Technical Bootcamps Delivered",
    tag: "Auditorium Masterclasses",
    reach: "10,000+ Students",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    caption: "Auditorium bootcamps across premier universities teaching full-stack architecture, Java Spring Boot, and Generative AI.",
  },
  {
    id: "hands-on",
    title: "Hands-on Project & Code Labs",
    tag: "Live Execution",
    reach: "100% Project-Based",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    caption: "Hands-on coding labs breaking down real exceptions, database indexing, REST APIs, and deploying live to AWS.",
  },
  {
    id: "outreach",
    title: "Multi-State Tech Programs",
    tag: "National Presence",
    reach: "Multi-State Reach",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80",
    caption: "Bridging academic curricula with live production engineering across higher education hubs in multiple Indian states.",
  },
];
