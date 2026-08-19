import React, { useEffect, useState } from "react";
import "./App.css";

const PROFILE_IMAGE =
  "https://image2url.com/r2/default/images/1773574063467-0dcea0c2-b60e-4e57-83f4-73f9b2afebe4.png";

const TAP_LOGO =
  "https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png";

const RESUME_URL =
  "https://drive.google.com/file/d/1UDlBw6hfhKgeoG0Owfo9UMEMWPBhGv0o/view?usp=drive_link";

const GITHUB_URL =
  "https://github.com/darshanpatil1108-byte";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/darshan-patil10";

const EMAIL = "darshanpatil1108@gmail.com";

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    menu: (
      <svg {...common}>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),

    close: (
      <svg {...common}>
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    ),

    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    download: (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    ),

    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),

    phone: (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
      </svg>
    ),

    location: (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),

    linkedin: (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),

    github: (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4c.1-.4.5-2-.1-4 0 0-1.3-.4-4.2 1.5a13.8 13.8 0 0 0-7.6 0C4.5-.4 3.2 0 3.2 0c-.6 2-.2 3.6-.1 4a5.5 5.5 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 7.4 18v4" />
        <path d="M7 20c-3 .9-3-1.4-4.2-1.8" />
      </svg>
    ),

    external: (
      <svg {...common}>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </svg>
    ),

    code: (
      <svg {...common}>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),

    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </svg>
    ),

    layers: (
      <svg {...common}>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    ),

    briefcase: (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),

    graduation: (
      <svg {...common}>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
        <path d="M22 10v6" />
      </svg>
    ),

    star: (
      <svg {...common}>
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
      </svg>
    ),

    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),

    send: (
      <svg {...common}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),

    calendar: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),

    terminal: (
      <svg {...common}>
        <path d="m4 17 6-5-6-5" />
        <path d="M12 19h8" />
      </svg>
    ),

    sparkles: (
      <svg {...common}>
        <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
        <path d="m19 17-.7 2.3L16 20l2.3.7L19 23l.7-2.3L22 20l-2.3-.7L19 17Z" />
      </svg>
    ),
  };

  return icons[name] || icons.code;
}

const skills = [
  {
    name: "Java",
    category: "Programming",
    level: "Advanced",
    color: "#f89820",
    icon: "☕",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    level: "Intermediate",
    color: "#6db33f",
    icon: "🍃",
  },
  {
    name: "Hibernate",
    category: "Backend",
    level: "Intermediate",
    color: "#59666c",
    icon: "H",
  },
  {
    name: "JDBC",
    category: "Backend",
    level: "Intermediate",
    color: "#e34f26",
    icon: "DB",
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: "Advanced",
    color: "#e34f26",
    icon: "5",
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Advanced",
    color: "#1572b6",
    icon: "3",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Advanced",
    color: "#f7df1e",
    icon: "JS",
  },
  {
    name: "React",
    category: "Frontend",
    level: "Intermediate",
    color: "#61dafb",
    icon: "⚛",
  },
  {
    name: "MySQL",
    category: "Database",
    level: "Advanced",
    color: "#00758f",
    icon: "🐬",
  },
  {
    name: "Git",
    category: "Tools",
    level: "Intermediate",
    color: "#f05032",
    icon: "◆",
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Intermediate",
    color: "#ffffff",
    icon: "●",
  },
  {
    name: "Apache Tomcat",
    category: "Tools",
    level: "Intermediate",
    color: "#f5a623",
    icon: "T",
  },
];

const projects = [
  {
    number: "01",
    title: "Food Ordering Web Application",
    description:
      "A full-stack food ordering platform that allows users to register, log in, browse restaurants and menus, manage a shopping cart, checkout and place orders.",
    tags: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "User registration and login",
      "Restaurant and menu browsing",
      "Shopping cart management",
      "Checkout and order placement",
      "MySQL database integration",
      "DAO Design Pattern",
    ],
    icon: "🍔",
    type: "Full Stack Web Application",
  },
];

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(
            visible.target.id.charAt(0).toUpperCase() +
              visible.target.id.slice(1)
          );
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setShowTop(window.scrollY > 600);

      document.querySelectorAll(".reveal").forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <div className="noise"></div>
      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>
      <div className="background-orb orb-three"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Go to home"
          >
            <img src={TAP_LOGO} alt="TAP Academy" />
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item}
                className={activeSection === item ? "active" : ""}
                onClick={() => scrollTo(item)}
              >
                {item}
              </button>
            ))}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              <Icon name="download" size={17} />
              Resume
            </a>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={25} />
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <div className="availability">
                <span></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <p className="eyebrow">HELLO, I'M</p>

              <h1>
                Darshan
                <span>Patil.</span>
              </h1>

              <div className="hero-role">
                <strong>Java Full Stack</strong>
                <strong>Web Developer</strong>
              </div>

              <div className="typing-line">
                <span>&gt;</span> Currently building as a{" "}
                <b>Java Developer</b>
                <i>_</i>
              </div>

              <p className="hero-description">
                Computer Science Engineering graduate and Java Full-Stack
                Developer with practical internship experience building
                responsive, database-driven and user-friendly web
                applications.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollTo("projects")}
                >
                  View Projects
                  <Icon name="arrow" size={18} />
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollTo("contact")}
                >
                  Let's Connect
                </button>
              </div>

              <div className="hero-socials">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" size={19} />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Icon name="github" size={19} />
                </a>

                <a href={`mailto:${EMAIL}`} aria-label="Email">
                  <Icon name="mail" size={19} />
                </a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="visual-ring ring-one"></div>
              <div className="visual-ring ring-two"></div>
              <div className="visual-ring ring-three"></div>

              <div className="image-frame">
                <div className="image-glow"></div>

                <img
                  src={PROFILE_IMAGE}
                  alt="Darshan Patil"
                  className="profile-image"
                />
              </div>

              <div className="floating-tech java-card">
                <div className="tech-symbol java-symbol">☕</div>
                <div>
                  <b>Java</b>
                  <small>Backend</small>
                </div>
              </div>

              <div className="floating-tech react-card">
                <div className="tech-symbol react-symbol">⚛</div>
                <div>
                  <b>React</b>
                  <small>Frontend</small>
                </div>
              </div>

              <div className="floating-tech mysql-card">
                <div className="tech-symbol mysql-symbol">🐬</div>
                <div>
                  <b>MySQL</b>
                  <small>Database</small>
                </div>
              </div>

              <div className="floating-badge">
                <Icon name="code" size={18} />
                <span>FULL STACK</span>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <div className="section-number">01</div>

              <div>
                <p className="section-label">ABOUT ME</p>

                <h2>
                  Turning ideas into
                  <br />
                  <em>digital experiences.</em>
                </h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-text reveal">
                <p className="lead">
                  I am <strong>Darshan Patil</strong>, a Computer Science
                  Engineering graduate who recently completed my{" "}
                  <strong>B.E. in Computer Science</strong>.
                </p>

                <p>
                  I have practical experience as a Java Full-Stack Developer
                  Intern, where I worked with Java, JSP, Servlets, JDBC,
                  MySQL, HTML5, CSS3 and JavaScript to develop responsive and
                  database-driven web applications.
                </p>

                <p>
                  I enjoy solving programming problems, designing clean user
                  interfaces and developing reliable applications. I am
                  currently seeking an entry-level Software Developer
                  opportunity where I can contribute to real-world projects
                  and continue growing as a software engineer.
                </p>

                <div className="about-location">
                  <Icon name="location" size={18} />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>

              <div className="stats-grid reveal">
                <div className="stat-card">
                  <span className="stat-icon">☕</span>
                  <strong>Java</strong>
                  <small>Primary Language</small>
                </div>

                <div className="stat-card">
                  <span className="stat-icon">🎓</span>
                  <strong>B.E.</strong>
                  <small>Computer Science</small>
                </div>

                <div className="stat-card">
                  <span className="stat-icon">🐬</span>
                  <strong>MySQL</strong>
                  <small>Database</small>
                </div>

                <div className="stat-card">
                  <span className="stat-icon">9.17</span>
                  <strong>CGPA</strong>
                  <small>Academic Score</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-dark">
          <div className="container">
            <div className="section-heading centered reveal">
              <div className="section-number">02</div>

              <div>
                <p className="section-label">TECHNICAL SKILLS</p>

                <h2>
                  My development
                  <br />
                  <em>toolkit.</em>
                </h2>
              </div>
            </div>

            <div className="skills-intro reveal">
              <p>
                Technologies and tools I use to design, develop and maintain
                modern web applications.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  className="skill-card reveal"
                  key={skill.name}
                  style={{ "--delay": `${index * 0.04}s` }}
                >
                  <div
                    className="skill-icon"
                    style={{ "--skill-color": skill.color }}
                  >
                    {skill.icon}
                  </div>

                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <span>{skill.category}</span>
                  </div>

                  <div className="skill-level">{skill.level}</div>
                </div>
              ))}
            </div>

            <div className="concepts reveal">
              <div className="concept-title">
                <Icon name="layers" size={20} />
                <span>Core Concepts</span>
              </div>

              <div className="concept-list">
                <span>OOP</span>
                <span>DAO Design Pattern</span>
                <span>REST APIs</span>
                <span>Database Design</span>
                <span>Problem Solving</span>
                <span>Responsive UI</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <div className="section-number">03</div>

              <div>
                <p className="section-label">EXPERIENCE</p>

                <h2>
                  Learning by
                  <br />
                  <em>building.</em>
                </h2>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-line"></div>

              <div className="experience-card glass-card reveal">
                <div className="timeline-dot"></div>

                <div className="experience-top">
                  <div className="experience-company">
                    <div className="company-logo">TA</div>

                    <div>
                      <span>SOFTWARE DEVELOPMENT INTERN</span>
                      <h3>Tap Academy</h3>
                    </div>
                  </div>

                  <div className="experience-date">
                    <Icon name="calendar" size={16} />
                    Feb 2026 — Aug 2026
                  </div>
                </div>

                <p className="experience-summary">
                  Hands-on software development experience focused on Java
                  Full Stack web application development.
                </p>

                <div className="experience-points">
                  <div>
                    <Icon name="check" size={18} />

                    <span>
                      Developed Java Full Stack web applications using Java,
                      JSP, Servlets, JDBC and MySQL.
                    </span>
                  </div>

                  <div>
                    <Icon name="check" size={18} />

                    <span>
                      Designed responsive user interfaces using HTML5, CSS3
                      and JavaScript.
                    </span>
                  </div>

                  <div>
                    <Icon name="check" size={18} />

                    <span>
                      Built database-driven modules using the DAO Design
                      Pattern and MySQL.
                    </span>
                  </div>

                  <div>
                    <Icon name="check" size={18} />

                    <span>
                      Worked on application development, testing, debugging
                      and deployment using Apache Tomcat.
                    </span>
                  </div>
                </div>

                <div className="experience-tags">
                  <span>Java</span>
                  <span>JSP</span>
                  <span>Servlets</span>
                  <span>JDBC</span>
                  <span>MySQL</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section section-dark">
          <div className="container">
            <div className="section-heading reveal">
              <div className="section-number">04</div>

              <div>
                <p className="section-label">FEATURED PROJECT</p>

                <h2>
                  Built to solve
                  <br />
                  <em>real problems.</em>
                </h2>
              </div>
            </div>

            {projects.map((project) => (
              <article
                className="project-card reveal"
                key={project.title}
              >
                <div className="project-visual">
                  <div className="project-glow"></div>

                  <div className="project-window">
                    <div className="window-top">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="food-interface">
                      <div className="food-nav">
                        <b>Foodie</b>
                        <span>Restaurants</span>
                        <span>Menu</span>
                        <span>Cart</span>
                      </div>

                      <div className="food-hero">
                        <div>
                          <small>DELIVERING HAPPINESS</small>
                          <h3>Good food.</h3>
                          <h3>Great moments.</h3>
                        </div>

                        <div className="food-emoji">🍔</div>
                      </div>

                      <div className="food-cards">
                        <div>🍕</div>
                        <div>🍗</div>
                        <div>🍔</div>
                      </div>
                    </div>
                  </div>

                  <div className="project-number">{project.number}</div>
                </div>

                <div className="project-content">
                  <div className="project-type">
                    <Icon name="terminal" size={16} />
                    {project.type}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-features">
                    {project.features.map((feature) => (
                      <span key={feature}>
                        <Icon name="check" size={15} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {/* OLD DELETED REPOSITORY REMOVED */}
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Icon name="github" size={18} />
                      View My GitHub
                    </a>

                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      GitHub Profile
                      <Icon name="arrow" size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="container">
            <div className="section-heading centered reveal">
              <div className="section-number">05</div>

              <div>
                <p className="section-label">EDUCATION & ACHIEVEMENTS</p>

                <h2>
                  Foundation for
                  <br />
                  <em>what comes next.</em>
                </h2>
              </div>
            </div>

            <div className="education-grid">
              <div className="education-card glass-card reveal">
                <div className="education-icon">
                  <Icon name="graduation" size={28} />
                </div>

                <div className="education-content">
                  <div className="education-status">COMPLETED 2026</div>

                  <h3>B.E. in Computer Science</h3>

                  <p className="college">
                    Bangalore College of Engineering and Technology
                  </p>

                  <p className="education-location">
                    Bangalore, Karnataka
                  </p>

                  <div className="education-meta">
                    <span>2022 — 2026</span>
                    <strong>CGPA 9.17</strong>
                  </div>
                </div>
              </div>

              <div className="achievement-card reveal">
                <div className="achievement-heading">
                  <Icon name="star" size={22} />
                  <span>ACHIEVEMENTS</span>
                </div>

                <div className="achievement-item">
                  <div className="achievement-number">01</div>

                  <div>
                    <h3>Academic Excellence</h3>

                    <p>
                      Secured Gold, Silver and Bronze ranks during B.E. in
                      Computer Science for academic excellence.
                    </p>
                  </div>
                </div>

                <div className="achievement-item">
                  <div className="achievement-number">02</div>

                  <div>
                    <h3>Tap Academy Recognition</h3>

                    <p>
                      Secured 2nd Rank in the Tap Academy Assignment
                      Leaderboard for outstanding performance and consistent
                      assignment completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card reveal">
              <div className="contact-orb"></div>

              <div className="contact-content">
                <p className="section-label">GET IN TOUCH</p>

                <h2>
                  Let's build something
                  <br />
                  <em>meaningful.</em>
                </h2>

                <p>
                  I am currently looking for an entry-level Software Developer
                  opportunity. If you have an opportunity or simply want to
                  connect, feel free to reach out.
                </p>

                <div className="contact-actions">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="primary-button"
                  >
                    <Icon name="mail" size={18} />
                    Email Me
                  </a>

                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button"
                  >
                    <Icon name="download" size={18} />
                    View Resume
                  </a>
                </div>
              </div>

              <div className="contact-details">
                <a href={`mailto:${EMAIL}`}>
                  <div className="contact-icon">
                    <Icon name="mail" size={20} />
                  </div>

                  <div>
                    <small>EMAIL</small>
                    <strong>{EMAIL}</strong>
                  </div>
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <Icon name="linkedin" size={20} />
                  </div>

                  <div>
                    <small>LINKEDIN</small>
                    <strong>darshan-patil10</strong>
                  </div>
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <Icon name="github" size={20} />
                  </div>

                  <div>
                    <small>GITHUB</small>
                    <strong>darshanpatil1108-byte</strong>
                  </div>
                </a>

                <div className="contact-location">
                  <div className="contact-icon">
                    <Icon name="location" size={20} />
                  </div>

                  <div>
                    <small>LOCATION</small>
                    <strong>Bangalore, Karnataka</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={TAP_LOGO} alt="TAP Academy" />
            <span>Java Full Stack Developer</span>
          </div>

          <p>
            © {new Date().getFullYear()} Darshan Bharatesh Patil. Built with
            React.
          </p>

          <div className="footer-socials">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={18} />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon name="github" size={18} />
            </a>

            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          className="back-top"
          onClick={() => scrollTo("home")}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;