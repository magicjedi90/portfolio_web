import { QBem } from 'qbem';
import styles from './page.module.css';

const bem = new QBem('portfolio');

export default function Home() {
  return (
    <div className={styles.portfolio}>
      {/* Hero Section */}
      <section className={styles[bem.block()]}>
        <div className={styles[bem.elem('hero-content')]}>
          <h1 className={styles[bem.elem('hero-title')]}>Jesse Michael Sindbad McIntosh</h1>
          <p className={styles[bem.elem('hero-subtitle')]}>
            Senior Lead Software Developer specializing in full-stack development
            with expertise in React, Node.js, and cloud technologies.
          </p>
          <div className={styles[bem.elem('hero-cta')]}>
            <a href="#projects" className={styles[bem.elem('hero-button', ['primary'])]}>
              View Projects
            </a>
            <a href="#contact" className={styles[bem.elem('hero-button', ['secondary'])]}>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles[bem.block(['about'])]}>
        <div className={styles[bem.elem('about-content')]}>
          <h2 className={styles[bem.elem('section-title')]}>About Me</h2>
          <p className={styles[bem.elem('about-text')]}>
            I'm a passionate software developer with over 8 years of experience in building scalable web applications.
            My expertise spans across full-stack development, with a particular focus on React, Node.js, and cloud technologies.
            I've led multiple teams in delivering high-impact projects and am always eager to learn and implement new technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles[bem.block(['skills'])]}>
        <div className={styles[bem.elem('skills-content')]}>
          <h2 className={styles[bem.elem('section-title')]}>Skills</h2>
          <div className={styles[bem.elem('skills-grid')]}>
            <div className={styles[bem.elem('skills-card')]}>
              <h3 className={styles[bem.elem('skills-title')]}>Frontend</h3>
              <ul className={styles[bem.elem('skills-list')]}>
                <li className={styles[bem.elem('skills-item')]}>React</li>
                <li className={styles[bem.elem('skills-item')]}>TypeScript</li>
                <li className={styles[bem.elem('skills-item')]}>Next.js</li>
                <li className={styles[bem.elem('skills-item')]}>Tailwind CSS</li>
              </ul>
            </div>
            <div className={styles[bem.elem('skills-card')]}>
              <h3 className={styles[bem.elem('skills-title')]}>Backend</h3>
              <ul className={styles[bem.elem('skills-list')]}>
                <li className={styles[bem.elem('skills-item')]}>Node.js</li>
                <li className={styles[bem.elem('skills-item')]}>Express</li>
                <li className={styles[bem.elem('skills-item')]}>PostgreSQL</li>
                <li className={styles[bem.elem('skills-item')]}>MongoDB</li>
              </ul>
            </div>
            <div className={styles[bem.elem('skills-card')]}>
              <h3 className={styles[bem.elem('skills-title')]}>Cloud & DevOps</h3>
              <ul className={styles[bem.elem('skills-list')]}>
                <li className={styles[bem.elem('skills-item')]}>AWS</li>
                <li className={styles[bem.elem('skills-item')]}>Docker</li>
                <li className={styles[bem.elem('skills-item')]}>CI/CD</li>
                <li className={styles[bem.elem('skills-item')]}>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles[bem.block(['projects'])]} id="projects">
        <div className={styles[bem.elem('projects-content')]}>
          <h2 className={styles[bem.elem('section-title')]}>Featured Projects</h2>
          <div className={styles[bem.elem('projects-grid')]}>
            <div className={styles[bem.elem('projects-card')]}>
              <div className={styles[bem.elem('projects-image')]}>
                {/* Add project image here */}
              </div>
              <div className={styles[bem.elem('projects-info')]}>
                <h3 className={styles[bem.elem('projects-title')]}>E-commerce Platform</h3>
                <p className={styles[bem.elem('projects-description')]}>
                  Built a scalable e-commerce platform using React, Node.js, and AWS.
                  Implemented features like real-time inventory management and payment processing.
                </p>
                <div className={styles[bem.elem('projects-tags')]}>
                  <span className={styles[bem.elem('projects-tag')]}>React</span>
                  <span className={styles[bem.elem('projects-tag')]}>Node.js</span>
                  <span className={styles[bem.elem('projects-tag')]}>AWS</span>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles[bem.block(['contact'])]} id="contact">
        <div className={styles[bem.elem('contact-content')]}>
          <h2 className={styles[bem.elem('section-title')]}>Get in Touch</h2>
          <p className={styles[bem.elem('contact-text')]}>
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
          <div className={styles[bem.elem('contact-cta')]}>
            <a href="mailto:your.jessemsmcintosh@gmail.com" className={styles[bem.elem('contact-button', ['primary'])]}>
              Email Me
            </a>
            <a href="https://linkedin.com/in/jessemcintosh1" className={styles[bem.elem('contact-button', ['secondary'])]}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
