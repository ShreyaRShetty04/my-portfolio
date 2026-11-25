
import {
  Mail,
  Code,
  User,
  GraduationCap,
  Briefcase,
  Folder
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Shreya.</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section className="hero" id="home">
        <div>
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Shreya</span></h1>
          <h2>Computer Science Engineering Student</h2>
          <p>
            I am passionate about programming, web development
            and exploring new technologies. I enjoy learning
            new skills and building creative projects.
          </p>
          <a className="btn" href="#projects">View My Projects</a>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <h2><User size={25} /> About Me</h2>
        <p>
          Hello! I'm Shreya, a Computer Science Engineering
          student at Sahyadri College of Engineering.
          I am interested in software development,
          problem solving and technology. I continuously
          work on improving my programming skills and
          learning new things.
        </p>
      </section>

      {/* Skills */}
      <section className="section skills" id="skills">
        <h2><Code size={25} /> My Skills</h2>
        <div className="skill-list">
          <span>Python</span>
          <span>C Programming</span>
          <span>Java</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2><Folder size={25} /> My Projects</h2>
        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            A responsive website developed using Next.js,
            React and CSS to showcase my skills, education
            and projects.
          </p>
          <p className="tech">Next.js | React | JavaScript | CSS</p>
        </div>

        <div className="project-card">
          <h3>Student Project Work</h3>
          <p>
            Academic programming projects focused on
            learning coding concepts and problem solving.
          </p>
          <p className="tech">Python | C | Java</p>
        </div>
      </section>

      {/* Education */}
      <section className="section" id="education">
        <h2><GraduationCap size={25} /> Education</h2>
        <div className="project-card">
          <h3>Bachelor of Technology (B.Tech)</h3>
          <p>Computer Science and Engineering</p>
          <p>Sahyadri College of Engineering</p>
          <p>Currently Pursuing</p>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <h2><Briefcase size={25} /> Experience</h2>
        <div className="project-card">
          <h3>Student Developer</h3>
          <p>
            Currently developing programming skills
            through academic projects, coding practice
            and self-learning.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to connect with me!</p>
        <div className="social-links">
  <a href="mailto:your-email@example.com">
    <Mail size={20} /> Email
  </a>

  <a href="https://github.com/your-username" target="_blank">
    GitHub
  </a>

  <a href="https://linkedin.com/" target="_blank">
    LinkedIn
  </a>
</div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Shreya. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
