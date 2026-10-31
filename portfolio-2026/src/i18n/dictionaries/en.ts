import type es from "./es";

const en: typeof es = {
  navigation: {
    home: "Home",
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },

  hero: {
    eyebrow: "IT Systems & Web Operations",
    title: "Technology, systems, and",
    titleHighlight: "web solutions",
    titleEnd: "that work.",
    description:
      "I'm Marcos Bruno Barrancos. I specialize in web infrastructure, WordPress, technical SEO, website QA, and digital solutions, combining extensive systems experience with modern web technologies.",
    projectsButton: "View Projects",
    contactButton: "Get in Touch",
    scrollText: "Explore My Work",
  },

  about: {
    eyebrow: "About Me",
    title: "Experience in Systems. Focused on Solutions.",
    description:
      "My career in technology began with developing business management systems and has evolved alongside new tools, platforms, and project requirements. Today, I combine that experience with modern web technologies to build, maintain, and optimize digital solutions.",
    descriptionSecondary:
      "I specialize in WordPress, web infrastructure, technical SEO, quality assurance, and troubleshooting. I enjoy understanding how systems work, identifying opportunities for improvement, and delivering practical, reliable, and sustainable solutions.",
    highlights: [
      {
        title: "Systems & Technology",
        description:
          "Experience in software development, implementation, maintenance, and technical support.",
      },
      {
        title: "Web Operations",
        description:
          "WordPress, hosting, DNS, SSL, performance, security, and website maintenance.",
      },
      {
        title: "Quality & Optimization",
        description:
          "Website QA, technical SEO, troubleshooting, and continuous improvement.",
      },
    ],
  },

  experience: {
    eyebrow: "Professional Journey",
    title: "Continuously Evolving with Technology.",
    description:
      "From my early software development projects to modern web operations and technologies, my career combines hands-on technical experience, continuous learning, and real-world problem-solving.",

    stages: [
      {
        period: "1990–2000",
        title: "Early Software Development & Systems",
        description:
          "I began developing business management software, working with databases, billing, inventory, and administrative processes. I also contributed to network implementations and IT solutions.",
        tags: ["Software Development", "Databases", "Business Systems"],
      },
      {
        period: "2001–2011",
        title: "IT Systems, Technology & Training",
        description:
          "I expanded my experience in systems implementation and maintenance, technical support, IT solutions, and training, working across different environments and business requirements.",
        tags: ["IT Systems", "Technical Support", "Training"],
      },
      {
        period: "2012–2023",
        title: "IT Infrastructure & Web Technologies",
        description:
          "I continued working in technical support, maintenance, and IT infrastructure while adopting new tools and strengthening my skills in web development, WordPress, and quality assurance.",
        tags: ["IT Infrastructure", "WordPress", "Quality Assurance"],
      },
      {
        period: "2024–2026",
        title: "Web Operations & Digital Projects",
        description:
          "I specialized in website maintenance and optimization, technical SEO, QA, security, migrations, and troubleshooting. I also developed modern solutions using React, Next.js, and cloud services.",
        tags: ["Web Operations", "Technical SEO", "Next.js"],
      },
    ],
  },

  projects: {
    eyebrow: "Featured Projects",
    title: "Real Solutions for Real-World Needs.",
    description:
      "A selection of projects showcasing my work in web development, infrastructure, maintenance, systems integration, and technical problem-solving.",
    viewProject: "Visit Project",
    viewCaseStudy: "View Case Study",
    underMaintenance: "Website under maintenance",

    items: [
      {
        slug: "gtr-autosale",
        title: "GTR Autosale",
        category: "Automotive",
        description:
          "Maintenance and recovery of a WordPress website, technical improvements, and development of a vehicle inventory management application.",
        technologies: ["WordPress", "Next.js", "PostgreSQL", "Web Security"],
      },
      {
        slug: "mentalis",
        title: "Mentalis",
        category: "Healthcare & Education",
        description:
          "Development of an institutional website for psychology and humanities services, featuring structured content, responsive design, and technical optimization.",
        technologies: ["Next.js", "React", "Technical SEO", "Vercel"],
      },
      {
        slug: "tecno-las-tipas",
        title: "Tecno Las Tipas",
        category: "Technology & Commerce",
        description:
          "Development of a platform featuring an administrative dashboard, product and supplier management, inventory control, and external catalog integrations.",
        technologies: ["Next.js", "Drizzle ORM", "PostgreSQL", "APIs"],
      },
      {
        slug: "deep-angle-studio",
        title: "Deep Angle Studio",
        category: "Digital Agency",
        description:
          "Development of a bilingual corporate website featuring a custom visual identity, modern architecture, and responsive design.",
        technologies: ["Next.js", "Tailwind CSS", "i18n", "Vercel"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's Work Together.",
    description:
      "I'm open to new professional opportunities, collaborations, and projects where I can contribute my experience in IT systems, web operations, and technology solutions.",
    emailButton: "Send an Email",
    socialTitle: "You can also find me on",
  },

  theme: {
    light: "Light Mode",
    dark: "Dark Mode",
  },

  mobileMenu: {
    open: "Open Menu",
    title: "Marcos Bruno Barrancos",
  },
};

export default en;
