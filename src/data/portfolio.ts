export const personalData = {
  name: "Ayush Kumar",
  title: "Full Stack Web Developer & AI/ML Engineer",
  tagline: "Building scalable web applications and autonomous AI systems with clean code and modern architectures",
  bio: `I'm Ayush Kumar, an Information Technology engineering student at IIIT Bhubaneswar (2023–2027). I specialize in architecting modern full-stack web applications and intelligent AI agent workflows. With deep expertise across the MERN stack, Python, FastAPI, and Data Structures & Algorithms in Java (200+ solved), I build resilient systems engineered for production.

I have developed 4 end-to-end production systems: Feasto (production food delivery ecosystem with Leaflet GPS live tracking and Google Gemini AI concierge), StayNest (Airbnb-inspired vacation marketplace with collision-proof blackout booking and Razorpay HMAC verification), SmartHouse (California property valuation engine achieving R² = 83.93% with 90% Split Conformal Prediction intervals), and AgentIQ (enterprise agentic RAG platform orchestrating LangGraph bounded reasoning, pgvector hybrid search, and AST-guarded SQL analytics).

I am actively seeking Software Development Engineer (SDE) internships and full-time opportunities where I can contribute to high-impact products and collaborate with experienced engineering teams.`,
  location: "Nalco Nagar, Angul, Odisha, India",
  email: "ayushkumardandapat200@gmail.com",
  phone: "+91 6371104472",
  resumeUrl: "/Ayush_Kumar_Resume.pdf",
  avatar: `${import.meta.env.BASE_URL}mygallary.jpg`,
  social: {
    github: "https://github.com/AyushKumar-12345",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-97326636a/",
    email: "ayushkumardandapat200@gmail.com",
    leetcode: "https://leetcode.com/u/ayushkumardandapat/",
    gfg: "https://www.geeksforgeeks.org/profile/ayushkumardcypg",
  },
}

export const timelineData = [
  {
    year: "2027",
    title: "B.Tech in Information Technology",
    org: "IIIT Bhubaneswar",
    description: "Graduating with a strong foundation in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and AI/ML.",
    type: "education",
  },
  {
    year: "2026",
    title: "Production Systems & Agentic AI Architecture",
    org: "Personal Engineering Projects",
    description: "Architected, containerized, and deployed 4 production systems: Feasto (MERN + Gemini AI), StayNest (MVC + Razorpay), SmartHouse (XGBoost + Conformal Prediction), and AgentIQ (FastAPI + LangGraph + pgvector).",
    type: "achievement",
  },
  {
    year: "2026",
    title: "Java DSA & Problem Solving (200+ Solved)",
    org: "LeetCode & GeeksforGeeks",
    description: "Solved 200+ Data Structures and Algorithms problems in Java, mastering arrays, linked lists, trees, graphs, dynamic programming, recursion, and greedy strategies.",
    type: "achievement",
  },
  {
    year: "2025",
    title: "Applied AI, Machine Learning & Vector Search",
    org: "Academic & Systems Research",
    description: "Studied supervised ML and agentic architectures, implementing Split Conformal Prediction intervals, pgvector semantic search, and RAG pipelines.",
    type: "education",
  },
  {
    year: "2023",
    title: "B.Tech in Information Technology",
    org: "IIIT Bhubaneswar",
    description: "Commenced undergraduate studies in Information Technology with a focus on software engineering, web development, and problem solving.",
    type: "education",
  },
  {
    year: "2023",
    title: "Class XII (Senior Secondary) — 88.6%",
    org: "Delhi Public School, Nalco Nagar, Angul",
    description: "Completed Higher Secondary Education with 88.6%, strengthening mathematical and analytical problem-solving foundations.",
    type: "education",
  },
  {
    year: "2021",
    title: "Class X (Secondary) — 98.2%",
    org: "Delhi Public School, Nalco Nagar, Angul",
    description: "Completed Secondary Education with 98.2% top honors, establishing sustained academic excellence.",
    type: "education",
  },
]

export const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "IIIT Bhubaneswar",
    year: "2023 – 2027",
    grade: "CGPA: 7.48",
    description: "Pursuing B.Tech in Information Technology with deep focus on Full Stack Web Development, Data Structures & Algorithms, Artificial Intelligence, and Software Engineering.",
    highlights: ["CGPA: 7.48", "MERN Stack", "Java DSA", "LangGraph & AI/ML"],
    logo: "🎓",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Delhi Public School, Nalco Nagar, Angul",
    year: "2021 – 2023",
    grade: "88.6%",
    description: "Completed higher secondary education with excellent academic performance and a strong foundation in Mathematics, Physics, and Chemistry.",
    highlights: ["88.6%", "Mathematics", "Science"],
    logo: "🏫",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Delhi Public School, Nalco Nagar, Angul",
    year: "2020 – 2021",
    grade: "98.2%",
    description: "Completed secondary education with top honors (98.2%) and developed strong analytical, scientific, and quantitative thinking skills.",
    highlights: ["98.2%", "Academic Distinction", "Strong Fundamentals"],
    logo: "📘",
  },
]

export const projectsData = [
  {
    id: 1,
    title: "Feasto",
    tagline: "Full-Stack MERN Food Delivery & AI Concierge Platform",
    description: "A production-grade food delivery ecosystem built with MERN architecture featuring decoupled customer and admin portals, real-time driver delivery tracking with Leaflet GPS, cryptographic Razorpay webhook verification (HMAC-SHA256), Google Gemini 3.0 AI food concierge, and multi-container Docker deployment on Render.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Razorpay", "Google Gemini", "Docker", "Leaflet"],
    github: "https://github.com/AyushKumar-12345/Feasto",
    live: "https://feasto-frontend-qt0n.onrender.com",
    featured: true,
    stats: { stars: 12, forks: 4 },
  },
  {
    id: 2,
    title: "StayNest",
    tagline: "Full-Stack Vacation Rental & Booking Platform",
    description: "A full-stack accommodation marketplace adopting MVC architecture featuring collision-proof booking with blackout calendars, cryptographic Razorpay payment verification, automated server-side PDF invoice generation via PDFKit, Passport.js session security, Joi validations, and Cloudinary media pipelines.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    tech: ["Node.js", "Express.js", "MongoDB Atlas", "EJS", "Bootstrap 5", "Razorpay", "PDFKit", "Cloudinary"],
    github: "https://github.com/AyushKumar-12345/StayNest",
    live: "https://staynest-dnrm.onrender.com",
    featured: true,
    stats: { stars: 10, forks: 3 },
  },
  {
    id: 3,
    title: "SmartHouse",
    tagline: "California Property Valuation & ML Inference Engine",
    description: "An enterprise Machine Learning service achieving R² = 83.93% and 17.52% MAPE using an optimized XGBoost gradient-boosted ensemble trained on 20,000+ California records. Features distribution-free Split Conformal Prediction intervals (90% coverage), Explainable AI (XAI) feature attribution, defensive validation, and containerized low-latency Flask REST API (<20ms).",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["Python", "Flask", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "Docker", "Conformal Prediction"],
    github: "https://github.com/AyushKumar-12345/SmartHousePricePredictor",
    live: "https://smarthousepricepredictor.onrender.com",
    featured: true,
    stats: { stars: 15, forks: 5 },
  },
  {
    id: 4,
    title: "AgentIQ",
    tagline: "Agentic Enterprise Knowledge & RAG Platform",
    description: "A full-stack enterprise agentic AI platform orchestrating bounded multi-step reasoning (LangGraph StateGraph ≤ 4 steps) with deterministic fallbacks, hybrid semantic search via PostgreSQL 16 and pgvector (HNSW indexing, 0.45 cosine cutoff) with source citations, 5-layer SQL guardrails with sqlglot AST parsing, and a 3-pane React 18 TypeScript interface.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["FastAPI", "Python", "LangGraph", "PostgreSQL", "pgvector", "React 18", "TypeScript", "Docker Compose"],
    github: "https://github.com/AyushKumar-12345/AgentIQ",
    live: "https://agentiq-frontend.onrender.com",
    featured: true,
    stats: { stars: 18, forks: 6 },
  },
]

export const achievementsData = [
  {
    title: "200+ DSA Problems Solved",
    subtitle: "LeetCode & GeeksforGeeks",
    year: "2026",
    icon: "🏆",
    description: "Solved 200+ Data Structures & Algorithms problems in Java across LeetCode and GeeksforGeeks, demonstrating algorithmic rigor in trees, dynamic programming, graphs, and recursion.",
    color: "#F59E0B",
    url: "https://leetcode.com/u/ayushkumardandapat/",
  },
  {
    title: "4 Containerized Production Systems",
    subtitle: "Feasto • StayNest • SmartHouse • AgentIQ",
    year: "2026",
    icon: "🚀",
    description: "Architected, containerized with multi-stage Dockerfiles, and deployed 4 full-stack systems featuring CI/CD pipelines, cryptographic payments, vector databases, and cloud hosting on Render.",
    color: "#3B82F6",
    url: "https://github.com/AyushKumar-12345",
  },
  {
    title: "AgentIQ: Enterprise Agentic AI Platform",
    subtitle: "FastAPI • LangGraph • pgvector",
    year: "2026",
    icon: "🧠",
    description: "Engineered an enterprise agentic platform orchestrating LangGraph bounded multi-step reasoning, HNSW pgvector hybrid search, and 5-layer AST-guarded SQL analytics with sqlglot.",
    color: "#8B5CF6",
    url: "https://agentiq-frontend.onrender.com",
  },
  {
    title: "SmartHouse: Conformal ML Inference Engine",
    subtitle: "XGBoost • Split Conformal Prediction",
    year: "2026",
    icon: "📈",
    description: "Developed an XGBoost property valuation service achieving R² = 83.93% and 17.52% MAPE, integrated with mathematically guaranteed 90% Split Conformal Prediction intervals and XAI telemetry.",
    color: "#10B981",
    url: "https://smarthousepricepredictor.onrender.com",
  },
  {
    title: "Feasto: Food Delivery Ecosystem",
    subtitle: "MERN Stack • Leaflet GPS • Gemini AI",
    year: "2026",
    icon: "🍔",
    description: "Developed decoupled customer and admin portals with Leaflet live driver GPS tracking, Razorpay HMAC-SHA256 signature verification, and Google Gemini AI recommendation concierge.",
    color: "#EC4899",
    url: "https://feasto-frontend-qt0n.onrender.com",
  },
  {
    title: "Academic Excellence (98.2% & 88.6%)",
    subtitle: "IIIT Bhubaneswar & DPS",
    year: "2023–2027",
    icon: "🎓",
    description: "Achieved 98.2% in Class X and 88.6% in Class XII; maintaining 7.48 CGPA in B.Tech Information Technology at IIIT Bhubaneswar.",
    color: "#6366F1",
  },
]

export const codingPlatformsData = [
  {
    platform: "LeetCode",
    username: "ayushkumardandapat",
    icon: "🥷",
    color: "#FFA116",
    url: "https://leetcode.com/u/ayushkumardandapat/",
    stats: [
      { label: "Solved", value: 200, suffix: "+" },
      { label: "Language", value: "Java" },
      { label: "Focus", value: "DSA" },
    ],
  },
  {
    platform: "GeeksforGeeks",
    username: "ayushkumardcypg",
    icon: "🟢",
    color: "#2F8D46",
    url: "https://www.geeksforgeeks.org/profile/ayushkumardcypg",
    stats: [
      { label: "Solved", value: 50, suffix: "+" },
      { label: "Language", value: "Java" },
      { label: "Rank", value: "Active" },
    ],
  },
]

export const servicesData = [
  {
    icon: "💻",
    title: "Full Stack Web Engineering",
    description: "Architecting scalable and resilient web applications using modern MERN and Python ecosystems, complete with secure authentication (JWT/OAuth), relational & NoSQL databases, and cloud deployment.",
    features: ["React.js & TypeScript UI", "Node.js & FastAPI Backends", "PostgreSQL & MongoDB", "RESTful APIs & Webhooks"],
    price: "Available",
  },
  {
    icon: "🧠",
    title: "Agentic AI & Machine Learning Systems",
    description: "Building production AI services including LangGraph multi-step reasoning agents, pgvector hybrid semantic search RAG pipelines, and scikit-learn / XGBoost predictive models with conformal prediction bounds.",
    features: ["LangGraph StateGraph Agents", "pgvector RAG Pipelines", "XGBoost & Scikit-learn", "Split Conformal Prediction"],
    price: "Available",
  },
  {
    icon: "🛠️",
    title: "API Architecture & DevOps",
    description: "Engineering secure backend systems with role-based access control (RBAC), Razorpay payment integrations with cryptographic webhook verification, multi-container Docker, and automated CI/CD pipelines.",
    features: ["Docker & Multi-Container", "Razorpay HMAC-SHA256", "GitHub Actions CI/CD", "Render Cloud Hosting"],
    price: "Available",
  },
  {
    icon: "⚡",
    title: "Algorithmic Problem Solving",
    description: "Applying strong computer science fundamentals and optimized data structures & algorithms (Java) to solve computationally complex problems with optimal time and space complexity.",
    features: ["Java DSA Expertise", "Graph & Tree Algorithms", "Dynamic Programming", "200+ Solved Problems"],
    price: "Available",
  },
]

export const skillsData = {
  frontend: [
    { name: "React 18", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML5 / Modern CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "Bootstrap 5 / EJS", level: 88 },
  ],
  backend: [
    { name: "Node.js & Express.js", level: 90 },
    { name: "Python & FastAPI / Flask", level: 88 },
    { name: "PostgreSQL & pgvector", level: 84 },
    { name: "MongoDB Atlas", level: 88 },
    { name: "RESTful APIs & JWT Auth", level: 92 },
    { name: "Razorpay Payments & Webhooks", level: 88 },
  ],
  tools: [
    { name: "Java (DSA Algorithms)", level: 90 },
    { name: "LangGraph / Agentic AI", level: 86 },
    { name: "Scikit-Learn & XGBoost", level: 84 },
    { name: "Docker & Docker Compose", level: 86 },
    { name: "Git & GitHub Actions CI/CD", level: 90 },
    { name: "Cloud Deployment (Render)", level: 92 },
  ],
}

export const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "TypeScript", icon: "🟦" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" },
  { name: "LangGraph", icon: "🧠" },
  { name: "Git", icon: "🐙" },
]
