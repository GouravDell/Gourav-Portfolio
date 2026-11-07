
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin,
  Menu, X, Code2, Layers3, BrainCircuit, Cloud, Database, Workflow,
  BriefcaseBusiness, GraduationCap, ExternalLink, Sparkles,
  CheckCircle2, Terminal, Globe2
} from 'lucide-react';
import '../src/styles.css';

const skills = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'Angular 9–17', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive UI'] },
  { title: 'React & Angular', icon: Layers3, items: ['React Hooks', 'Redux Toolkit', 'RTK Query', 'Context API', 'RxJS', 'NgRx', 'PrimeNG', 'Angular Material'] },
  { title: 'Backend & APIs', icon: Terminal, items: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth2', 'RBAC'] },
  { title: 'Data & Cloud', icon: Cloud, items: ['MongoDB', 'MySQL', 'AWS', 'Docker', 'CI/CD', 'Git', 'GitHub', 'Postman'] },
  { title: 'AI & Engineering', icon: BrainCircuit, items: ['Generative AI', 'OpenAI API', 'Prompt Integration', 'Reusable Architecture', 'Performance Optimization', 'Agile/Scrum'] }
];

const experience = [
  {
    company: 'Valora Digitech IT Solutions',
    role: 'Founder',
    date: 'Sep 2026 — Present',
    points: [
      'Lead the design and development of scalable web applications using React.js, Angular, JavaScript and TypeScript.',
      'Develop backend services and RESTful APIs using Python and FastAPI.',
      'Explore and integrate Generative AI capabilities into modern business applications.',
      'Build responsive, user-friendly interfaces with reusable components and maintainable architecture.',
      'Manage project development, technical implementation and application deployment.',
      'Work on cloud solutions, CI/CD pipelines and modern development practices.'
    ]
  },
  {
    company: 'HB Group',
    role: 'Senior Solutions Engineer',
    date: 'Oct 2026 — Present',
    points: [
      'Analyze business requirements and design scalable technology solutions.',
      'Provide technical guidance and recommend appropriate technologies for business needs.',
      'Contribute to solution architecture, application development and technical implementation.',
      'Collaborate with stakeholders and development teams to deliver effective software solutions.',
      'Identify technical challenges, troubleshoot issues and improve application performance.'
    ]
  },
  {
    company: 'Chetu India Pvt. Ltd.',
    role: 'Software Engineer',
    date: 'Nov 2022 — Sep 2026',
    points: [
      'Build scalable enterprise applications using React.js, TypeScript, JavaScript and Angular.',
      'Develop modular React experiences with Hooks, Redux Toolkit, RTK Query, Context API and custom hooks.',
      'Integrate REST and third-party APIs, including authentication, validation and asynchronous data workflows.',
      'Implement JWT, RBAC and refresh-token based authentication flows.',
      'Improve frontend performance through lazy loading, modular architecture and optimized API calls.',
      'Collaborate with QA, product, UI/UX and DevOps teams in Agile/Scrum delivery.'
    ]
  },
  {
    company: 'Pytosoft IT Solution Private Limited',
    role: 'Software Engineer',
    date: 'Sep 2020 — Oct 2022',
    points: [
      'Developed responsive web interfaces using Angular, JavaScript, TypeScript, HTML5 and CSS3.',
      'Implemented RxJS-based asynchronous workflows and integrated REST APIs.',
      'Built reusable UI features and delivered enhancements, defect fixes and third-party integrations.',
      'Contributed to subscription, e-commerce and employment/job-portal workflows.',
      'Worked with cross-functional teams to deliver maintainable, production-ready features.'
    ]
  }
];

const projects = [
  {
    number: '01',
    name: 'AI Resume Screening System',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    type: 'Generative AI · Full Stack',
    description: 'An AI-powered hiring platform that analyzes candidate resumes against job descriptions and helps rank relevant profiles.',
    stack: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'OpenAI API', 'JWT'],
    points: ['Resume and job-description analysis', 'FastAPI and OpenAI API integration', 'Authenticated workflows with JWT and RBAC']
  },
  {
    number: '02',
    name: 'VoigtIndustries-RETL',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    type: 'Enterprise · React Frontend',
    description: 'A scalable single-page application built with reusable UI architecture and centralized state management.',
    stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Node.js', 'Python', 'MongoDB'],
    points: ['Reusable components and custom hooks', 'API integration with RTK Query', 'Lazy loading and modular architecture']
  },
  {
    number: '03',
    name: 'ATS — Applicant Tracking System',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85',
    type: 'Enterprise · Angular',
    description: 'A hiring workflow platform supporting the candidate journey from job management and interviews to offers and onboarding.',
    stack: ['Angular 17', 'TypeScript', 'PrimeNG', 'RxJS', 'NgRx', 'Node.js', 'Python'],
    points: ['Dashboard, jobs, applicants, offers and onboarding', 'NgRx Store/Effects and RxJS workflows', 'Responsive UI, REST integration and lazy loading']
  },
  {
    number: '04',
    name: 'KYS — Subscription Management',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
    type: 'Subscription · Web Application',
    description: 'An e-commerce and subscription management application covering administration, plans and subscription workflows.',
    stack: ['Angular 10', 'RxJS', 'JavaScript', 'Python', 'Spring Boot', 'MySQL'],
    points: ['Administration and subscription modules', 'Plan management workflows', 'Third-party API integrations']
  },
  {
    number: '05',
    name: 'Joshter — Employment Portal',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    type: 'Employment · Web Application',
    description: 'A job portal experience connecting job seekers and employers through profile, CV and authenticated user journeys.',
    stack: ['Angular 9', 'RxJS', 'JavaScript', 'Node.js', 'MySQL'],
    points: ['Job seeker and employer UI features', 'Profile and CV workflows', 'Authenticated application access']
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          Gourav<span>  Ojha</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero-kicker">HELLO, I'M GOURAV OJHA</p>
            <h1>
              Building digital<br />
              <span className="gradient-text">experiences</span> that<br />
              make an impact.
            </h1>
            <p className="hero-description">
              Full Stack Developer focused on crafting scalable web applications with
              <strong> React, Angular, Python, FastAPI</strong> and Generative AI.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="btn btn-secondary" href="mailto:ojhagourav481@gmail.com">
                Get in touch <Mail size={16} />
              </a>
            </div>

            <div className="social-row">
              <a href="https://github.com/GouravDell" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/in/gourav-ojha-934001262/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:ojhagourav481@gmail.com" aria-label="Email"><Mail /></a>
              <span className="social-divider" />
              <span className="location"><MapPin size={14} /> India</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-top">
                <span className="window-dots"><i /><i /><i /></span>
              </div>

              <div className="profile-image-wrapper">
                <img
                  src="/gourav-hero.jpeg"
                  alt="Gourav Ojha"
                  className="profile-photo"
                />
              </div>

              <div className="profile-name">Gourav Ojha</div>
              <div className="profile-role">Full Stack Developer</div>
              <div className="profile-divider" />

              <div className="code-line"><span className="code-purple">const</span> developer = {'{'}</div>
              <div className="code-line indent"><span className="code-blue">frontend</span>: <span className="code-green">'React · Angular'</span>,</div>
              <div className="code-line indent"><span className="code-blue">backend</span>: <span className="code-green">'Python · FastAPI'</span>,</div>
              <div className="code-line indent"><span className="code-blue">focus</span>: <span className="code-green">'GenAI & Scale'</span></div>
              <div className="code-line">{'}'};</div>

              <div className="profile-tags">
                <span>React</span><span>Python</span><span>GenAI</span>
              </div>
            </div>

            <div className="float-chip chip-react"><Code2 size={16} /> React.js</div>
            <div className="float-chip chip-python"><Terminal size={16} /> Python</div>
            <div className="float-chip chip-ai"><Sparkles size={16} /> Generative AI</div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="stats-strip section-wrap">
          <div><strong>5<span>+</span></strong><small>Years of experience*</small></div>
          <div><strong>5</strong><small>Featured projects</small></div>
          <div><strong>3</strong><small>Organizations</small></div>
          <div><strong>Full Stack</strong><small>Engineering mindset</small></div>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title={<>A little about <span className="gradient-text">my journey.</span></>}
          />
          <div className="about-grid">
            <div className="about-lead">
              <span className="quote-mark">“</span>
              <h3>I turn ideas into dependable, user-focused software.</h3>
              <div className="about-image-frame">
                <img
                  src="/gourav-about.jpeg"
                  alt="Modern developer workspace"
                  className="about-image"
                  loading="lazy"
                />
                <span className="image-caption"><Code2 size={14} /> Building ideas into products</span>
              </div>
            </div>
            <div className="about-content">
              <p>I'm a Full Stack Developer with 5+ years of experience building responsive, scalable and high-performance web applications. My core strengths are modern frontend engineering, API integration, state management and creating maintainable application architecture.</p>
              <p>Across enterprise, hiring, subscription and employment platforms, I've worked with cross-functional teams to deliver features from UI development through API integration and production support. I'm also exploring Generative AI integrations to build smarter product experiences.</p>
              <div className="about-facts">
                <div><MapPin size={17} /><span><b>Location</b>India</span></div>
                <div><GraduationCap size={17} /><span><b>Education</b>BCA · Rajasthan University</span></div>
                <div><BriefcaseBusiness size={17} /><span><b>Current role</b>Software Engineer · Chetu</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            eyebrow="02 / TOOLKIT"
            title={<>Technologies I <span className="gradient-text">work with.</span></>}
            text="A practical toolkit across frontend, backend, cloud and AI-powered application development."
          />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  className="skill-card"
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                >
                  <div className="skill-icon"><Icon size={21} /></div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionHeading
            eyebrow="03 / EXPERIENCE"
            title={<>Where I've <span className="gradient-text">made a difference.</span></>}
            text="Professional experience building and improving production web applications."
          />
          <div className="experience-photo-card">
            <img src="/gourav-experience.jpeg" alt="Gourav Ojha - professional portrait" loading="lazy" />
            <div className="experience-photo-overlay">
              <span className="eyebrow">BUILD · LEARN · GROW</span>
              <h3>Turning ideas into impactful digital products.</h3>
            </div>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <motion.article
                className="timeline-item"
                key={job.company}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">{index + 1}</div>
                <div className="experience-card">
                  <div className="experience-top">
                    <div><h3>{job.company}</h3><p>{job.role}</p></div>
                    <span className="date-pill">{job.date}</span>
                  </div>
                  <ul>
                    {job.points.map(point => (
                      <li key={point}><CheckCircle2 size={15} />{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading
            eyebrow="04 / SELECTED WORK"
            title={<>Projects built with <span className="gradient-text">purpose.</span></>}
            text="A selection of platforms and product workflows I've contributed to."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card ${index === 0 ? 'featured-project' : ''}`}
                key={project.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={`${project.name} preview`} className="project-image" loading="lazy" />
                  <span className="project-image-label">PROJECT PREVIEW</span>
                </div>
                <div className="project-top">
                  <span className="project-number">{project.number} / 05</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-symbol">
                  {index === 0 ? <BrainCircuit /> : index === 1 ? <Layers3 /> : index === 2 ? <Workflow /> : index === 3 ? <Database /> : <Globe2 />}
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-points">
                  {project.points.map(point => <li key={point}>{point}</li>)}
                </ul>
                <div className="project-stack">
                  {project.stack.map(tech => <span key={tech}>{tech}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block education-section">
          <SectionHeading
            eyebrow="05 / EDUCATION"
            title={<>The foundation <span className="gradient-text">behind the code.</span></>}
          />
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={26} /></div>
            <div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Rajasthan University · Jaipur</p>
            </div>
            <span className="education-year">2020 <b>·</b> 75%</span>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <span className="eyebrow">06 / GET IN TOUCH</span>
            <h2>Have a project in mind?<br /><span className="gradient-text">Let's build something great.</span></h2>
            <p>I'm open to discussing software engineering opportunities, interesting products and collaborations.</p>
            <a className="btn btn-primary contact-cta" href="mailto:ojhagourav481@gmail.com">
              Start a conversation <ArrowUpRight size={17} />
            </a>
            <div className="contact-details">
              <a href="mailto:ojhagourav481@gmail.com"><Mail size={17} />ojhagourav481@gmail.com</a>
              <a href="tel:+919079753631"><Phone size={17} />+91 90797 53631</a>
              <a href="https://www.linkedin.com/in/gourav-ojha-934001262/" target="_blank" rel="noreferrer">
                <Linkedin size={17} />LinkedIn <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <p>Designed & built with care. © {new Date().getFullYear()} Gourav Ojha.</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
