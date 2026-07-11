import { Github, Linkedin, Mail, ShieldAlert } from 'lucide-react'

export const personalData = {
  name: "Ayush Kumar",
  title: "Full Stack Web Developer",
  tagline: "Building scalable web applications with clean code and modern technologies",
  bio: `I'm Ayush Kumar, a fourth-year B.Tech student in Information Technology at IIIT Bhubaneswar. I enjoy building modern full-stack web applications using the MERN stack and continuously improving my problem-solving skills through Data Structures & Algorithms in Java. I have developed several end-to-end projects including Feasto, StayNest, and SmartHousePricePredictor, focusing on scalable architecture, responsive user interfaces, authentication, cloud deployment, and real-world development practices. Alongside web development, I'm exploring Artificial Intelligence & Machine Learning and enjoy learning technologies that solve practical problems. I'm currently seeking Software Development Engineer (SDE) internships and full-time opportunities where I can contribute, learn from experienced engineers, and build impactful products.`,
  location: "Nalco Nagar, Angul, Odisha, India",
  email: "ayushkumardandapat200@gmail.com",
  phone: "+91 6371104472",
  resumeUrl: "#",
  avatar: `${import.meta.env.BASE_URL}mygallary.jpg`,
  social: {
    github: "https://github.com/AyushKumar-12345",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-97326636a/",
    twitter: "",
    instagram: "",
  },
}

export const timelineData = [
  {
    year: "2027",
    title: "B.Tech in Information Technology",
    org: "IIIT Bhubaneswar",
    description: "Graduating with a strong foundation in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and Full Stack Web Development.",
    type: "education",
  },
  {
    year: "2026",
    title: "Full Stack Development Projects",
    org: "Personal Projects",
    description: "Built and deployed production-ready MERN stack applications including Feasto, StayNest, and SmartHousePricePredictor with authentication, cloud deployment, payment integration, and responsive user interfaces.",
    type: "achievement",
  },
  {
    year: "2026",
    title: "Java DSA & Problem Solving",
    org: "LeetCode & GeeksforGeeks",
    description: "Solved 200+ Data Structures and Algorithms problems while strengthening concepts in arrays, linked lists, trees, graphs, hashing, greedy algorithms, recursion, and dynamic programming.",
    type: "achievement",
  },
  {
    year: "2025",
    title: "Artificial Intelligence & Machine Learning",
    org: "Academic Learning",
    description: "Studied supervised machine learning concepts and applied them by developing practical projects including a Smart House Price Prediction system.",
    type: "education",
  },
  {
    year: "2023",
    title: "B.Tech in Information Technology",
    org: "IIIT Bhubaneswar",
    description: "Started undergraduate studies in Information Technology with a focus on software engineering, web development, and problem solving.",
    type: "education",
  },
  {
    year: "2023",
    title: "Class XII",
    org: "Delhi Public School, Nalco Nagar, Angul",
    description: "Completed Higher Secondary Education with 88.6%, strengthening analytical and mathematical fundamentals.",
    type: "education",
  },
  {
    year: "2021",
    title: "Class X",
    org: "Delhi Public School, Nalco Nagar, Angul",
    description: "Completed Secondary Education with 98.2%, building a strong academic foundation.",
    type: "education",
  },
]

export const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "IIIT Bhubaneswar",
    year: "2023 – 2027",
    grade: "CGPA: 7.48",
    description: "Currently pursuing B.Tech in Information Technology with strong interest in Full Stack Web Development, Data Structures & Algorithms, Artificial Intelligence, and Software Engineering.",
    highlights: ["CGPA: 7.48", "MERN Stack", "Java DSA", "AI / ML"],
    logo: "🎓",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Delhi Public School, Nalco Nagar, Angul",
    year: "2021 – 2023",
    grade: "88.6%",
    description: "Completed higher secondary education with excellent academic performance and a strong foundation in Mathematics and Science.",
    highlights: ["88.6%", "Mathematics", "Science"],
    logo: "🏫",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Delhi Public School, Nalco Nagar, Angul",
    year: "2020 – 2021",
    grade: "98.2%",
    description: "Completed secondary education with outstanding academic performance and developed strong analytical thinking skills.",
    highlights: ["98.2%", "Academic Excellence", "Strong Fundamentals"],
    logo: "📘",
  },
]

export const projectsData = [
  {
    id: 1,
    title: "Feasto",
    tagline: "Full Stack Food Delivery Platform",
    description: "A production-ready MERN stack food delivery application with secure authentication, Razorpay payment integration, Cloudinary image uploads, order management, admin dashboard, and responsive UI. Built with scalable architecture and deployed on Render.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
    github: "https://github.com/AyushKumar-12345/Feasto",
    live: "https://feasto-admin-567d.onrender.com",
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 2,
    title: "StayNest",
    tagline: "Airbnb Inspired Property Booking Platform",
    description: "A full-stack accommodation booking platform inspired by Airbnb featuring secure authentication, property listing management, image uploads, reviews, booking workflow, interactive maps, and responsive design using Node.js, Express, MongoDB, EJS, and Cloudinary.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Bootstrap"],
    github: "https://github.com/AyushKumar-12345/StayNest",
    live: "https://staynest-dnrm.onrender.com",
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 3,
    title: "Smart House Price Predictor",
    tagline: "Machine Learning House Price Prediction System",
    description: "A Machine Learning web application that predicts house prices using trained regression models. Developed with Python, Flask, Scikit-learn, HTML, CSS, and deployed on Render with an attractive responsive interface.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "HTML", "CSS"],
    github: "https://github.com/AyushKumar-12345/SmartHousePricePredictor",
    live: "https://smarthousepricepredictor.onrender.com",
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 4,
    title: "Portfolio Website",
    tagline: "Modern Developer Portfolio",
    description: "A production-ready, type-safe portfolio website engineered with React, TypeScript, and Tailwind CSS. Features dynamic viewport stagger animations via Framer Motion, fully optimized light/dark mode layouts, and custom modular build splitting configurations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/AyushKumar-12345",
    live: "#",
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
]

export const achievementsData = [
  {
    title: "200+ DSA Problems Solved",
    subtitle: "LeetCode & GeeksforGeeks",
    year: "2026",
    icon: "🏆",
    description: "Solved more than 200 Data Structures & Algorithms problems across LeetCode and GeeksforGeeks while strengthening problem-solving and coding interview skills.",
    color: "#F59E0B",
  },
  {
    title: "Full Stack MERN Projects",
    subtitle: "Production Ready Applications",
    year: "2026",
    icon: "💻",
    description: "Designed and developed multiple full-stack applications including Feasto, StayNest, and SmartHousePricePredictor using modern technologies and cloud deployment.",
    color: "#3B82F6",
  },
  {
    title: "Artificial Intelligence Project",
    subtitle: "Machine Learning",
    year: "2026",
    icon: "🤖",
    description: "Built an end-to-end Smart House Price Prediction system using Machine Learning, Flask, Scikit-learn, Pandas, and NumPy.",
    color: "#10B981",
  },
  {
    title: "Java DSA",
    subtitle: "Problem Solving",
    year: "2026",
    icon: "☕",
    description: "Developed strong foundations in Data Structures & Algorithms using Java, covering Trees, Graphs, Greedy Algorithms, Hashing, Dynamic Programming, and more.",
    color: "#007396",
  },
  {
    title: "Open Source Projects",
    subtitle: "GitHub Portfolio",
    year: "2026",
    icon: "🐙",
    description: "Maintaining personal projects on GitHub while continuously improving code quality, documentation, and deployment practices.",
    color: "#333333",
  },
  {
    title: "B.Tech Information Technology",
    subtitle: "IIIT Bhubaneswar",
    year: "2023–2027",
    icon: "🎓",
    description: "Pursuing B.Tech in Information Technology while focusing on Full Stack Development, Java DSA, and Artificial Intelligence.",
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
      { label: "Solved", value: 160, suffix: "+" },
      { label: "Rank", value: "Top 15%" },
      { label: "Language", value: "Java" },
    ],
  },
  {
    platform: "GeeksforGeeks",
    username: "ayushkumar123",
    icon: "🟢",
    color: "#2F8D46",
    url: "https://www.geeksforgeeks.org/",
    stats: [
      { label: "Solved", value: 50, suffix: "+" },
      { label: "Score", value: 180 },
      { label: "Language", value: "Java" },
    ],
  },
]

export const servicesData = [
  {
    icon: "💻",
    title: "Full Stack Web Development",
    description: "Building scalable and responsive full-stack web applications using the MERN stack with modern UI, authentication, REST APIs, cloud deployment, and best development practices.",
    features: ["React.js Development", "Node.js & Express.js", "MongoDB Database", "REST API Integration"],
    price: "Available",
  },
  {
    icon: "⚛️",
    title: "Frontend Development",
    description: "Developing responsive, interactive, and modern user interfaces with React, JavaScript, HTML, CSS, Tailwind CSS, and Bootstrap while focusing on performance and user experience.",
    features: ["Responsive Design", "React Components", "Modern UI/UX", "Performance Optimization"],
    price: "Available",
  },
  {
    icon: "🛠️",
    title: "Backend Development",
    description: "Developing secure backend applications with authentication, database management, REST APIs, cloud deployment, payment gateway integration, and scalable architecture.",
    features: ["Express.js APIs", "MongoDB", "Authentication", "Cloud Deployment"],
    price: "Available",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence & Machine Learning",
    description: "Building machine learning applications using Python, Scikit-learn, Pandas, NumPy, and Flask with a focus on solving practical real-world problems.",
    features: ["Python", "Machine Learning", "Flask", "Data Analysis"],
    price: "Learning",
  },
]

export const skillsData = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Bootstrap", level: 85 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "REST APIs", level: 90 }
  ],
  tools: [
    { name: "Java (DSA)", level: 85 },
    { name: "Python", level: 75 },
    { name: "Flask", level: 70 },
    { name: "Git & GitHub", level: 90 }
  ]
}

export const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Git", icon: "🐙" }
]