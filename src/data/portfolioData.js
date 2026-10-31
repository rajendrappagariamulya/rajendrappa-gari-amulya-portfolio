// ============================================================
// portfolioData.js — Verified real personal information
// This file controls all content and links across the portfolio.
// ============================================================

export const personalInfo = {
  name: "RAJENDRAPPA GARI AMULYA",
  firstName: "RAJENDRAPPA GARI AMULYA",
  brandName: "RAJENDRAPPA GARI AMULYA",
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+917989505370",
  emails: {
    primary: "rajendrappagariamulya@gmail.com",
    secondary: "",
  },
  summary: "Aspiring Software Developer skilled in SQL, Java, and web development, passionate about building practical and user-friendly applications.",
  resumeUrl: "/Amulya resume01.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/rajendrappagariamulya",
  linkedin: "https://www.linkedin.com/in/rajendrappa-gari-amulya-3143a5398",
  instagram: "",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const heroContent = {
  greeting: "Hi, I'm RAJENDRAPPA GARI AMULYA",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Aspiring Software Developer skilled in Java, SQL, and web technologies, building practical, efficient, and user-friendly applications.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:rajendrappagariamulya@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Amulya resume01.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I am a passionate and hardworking Computer Science Engineering graduate from Brindavan Institute of Technology and Science, Kurnool, currently sharpening my skills through the placement training program at TAP Academy. I have solid foundations in Core Java, OOPs, JDBC, SQL, HTML, CSS, and JavaScript. Driven by curiosity and problem-solving, my goal is to build impactful and user-friendly software applications as a Software Developer.`,
  techStack: ["Java", "SQL", "HTML & CSS", "JavaScript", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured approach to understanding requirements, designing robust logic, and delivering practical software.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I analyze requirements, understand user workflows, and identify optimal database schemas and system architecture.",
    },
    {
      number: "02",
      title: "Design",
      text: "I outline clean database models, map object-oriented structures, and draft responsive UI layouts.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I write clean, modular Java and web code adhering to OOP principles and test logic iteratively.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I test endpoints and database queries, verify responsive design, and deploy reliable applications.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Core Java & OOPs" }, { name: "Python basics" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    },
    {
      title: "Databases",
      skills: [{ name: "SQL" }, { name: "MySQL" }, { name: "JDBC" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Eclipse" }, { name: "MySQL Workbench" }, { name: "Git & GitHub" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Skill Development & Coding Practice",
    description: "Practicing Java and SQL, improving problem-solving skills, and learning new technologies to develop comprehensive technical knowledge.",
    role: "Aspiring Developer",
    badge: "Skill Building",
  },
];

export const internshipsList = [
  {
    organization: "CodeWorks",
    role: "Python Full Stack Development Intern",
    duration: "November 2025 – March 2026 (5 months)",
    skills: [
      "Front-end Development",
      "Back-end Programming",
      "Database Management",
      "Web Application Development",
    ],
    tech: ["Python", "HTML", "CSS", "JavaScript", "SQL"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking complex programming challenges into logical, step-by-step solutions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Expressing technical concepts clearly and collaborating effectively with peers and mentors.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Balancing intensive coding practice, coursework, and project milestones efficiently.",
  },
  {
    name: "Creativity",
    icon: "💡",
    desc: "Designing intuitive user interfaces and exploring novel approaches to software design.",
  },
];

export const projects = [
  {
    id: "brain-stroke-detection",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Detection of Brain Stroke Disease Using Advanced Deep Learning Algorithms and Optimization Techniques",
    description: "A deep learning-based project focused on detecting brain stroke disease using medical data and advanced algorithms for accurate diagnosis.",
    techTags: ["Python", "Deep Learning", "Machine Learning"],
    links: { github: "", demo: "" },
    isFlagship: true,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Python Full Stack Development", issuer: "CodeWorks", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/rajendrappa-gari-amulya-3143a5398",
};

export const education = {
  degree: "B.Tech Computer Science and Engineering",
  institution: "Brindavan Institute Of Technology & Science, Kurnool",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · SQL · Web Development",
    "Crafting practical, user-friendly solutions",
  ],
  credential: "B.Tech in Computer Science and Engineering",
  copyright: `© ${new Date().getFullYear()} RAJENDRAPPA GARI AMULYA | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
