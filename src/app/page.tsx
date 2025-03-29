import Image from "next/image";
import styles from "./page.module.css";
import QBem from 'qbem';
const bem = new QBem('portfolio');

export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <section className={bem.block()}>
        <div className={bem.elem('hero-content')}>
          <h1 className={bem.elem('hero-title')}>John Doe</h1>
          <p className={bem.elem('hero-subtitle')}>
            Senior Software Developer specializing in full-stack development
            with expertise in React, Node.js, and cloud technologies.
          </p>
          <div className={bem.elem('hero-cta')}>
            <a href="#projects" className={bem.elem('hero-button', ['primary'])}>
              View Projects
            </a>
            <a href="#contact" className={bem.elem('hero-button', ['secondary'])}>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={bem.block(['skills'])}>
        <div className={bem.elem('skills-grid')}>
          <div className={bem.elem('skills-card')}>
            <h2 className={bem.elem('skills-title')}>Frontend</h2>
            <ul className={bem.elem('skills-list')}>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>⚛️</span>
                React & Next.js
              </li>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>🎨</span>
                Tailwind CSS & Styled Components
              </li>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>📱</span>
                Responsive Design
              </li>
            </ul>
          </div>
          <div className={bem.elem('skills-card')}>
            <h2 className={bem.elem('skills-title')}>Backend</h2>
            <ul className={bem.elem('skills-list')}>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>🚀</span>
                Node.js & Express
              </li>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>🗄️</span>
                PostgreSQL & MongoDB
              </li>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>🔒</span>
                Authentication & Security
              </li>
            </ul>
          </div>
          <div className={bem.elem('skills-card')}>
            <h2 className={bem.elem('skills-title')}>DevOps & Tools</h2>
            <ul className={bem.elem('skills-list')}>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>☁️</span>
                AWS & Docker
              </li>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>🔄</span>
                CI/CD & Git
              </li>
              <li className={bem.elem('skills-item')}>
                <span className={bem.elem('skills-icon')}>📊</span>
                Monitoring & Analytics
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={bem.block(['projects'])}>
        <div className={bem.elem('projects-grid')}>
          <div className={bem.elem('projects-card')}>
            <Image
              src="/images/project1.jpg"
              alt="E-commerce Platform"
              width={600}
              height={300}
              className={bem.elem('projects-image')}
            />
            <div className={bem.elem('projects-content')}>
              <h3 className={bem.elem('projects-title')}>E-commerce Platform</h3>
              <p className={bem.elem('projects-description')}>
                A full-stack e-commerce platform built with Next.js, Node.js, and PostgreSQL.
                Features include user authentication, product management, and payment integration.
              </p>
              <div className={bem.elem('projects-tags')}>
                <span className={bem.elem('projects-tag')}>Next.js</span>
                <span className={bem.elem('projects-tag')}>Node.js</span>
                <span className={bem.elem('projects-tag')}>PostgreSQL</span>
              </div>
              <div className={bem.elem('projects-links')}>
                <a href="#" className={bem.elem('projects-link')}>View Project</a>
                <a href="#" className={bem.elem('projects-link')}>GitHub</a>
              </div>
            </div>
          </div>
          <div className={bem.elem('projects-card')}>
            <Image
              src="/images/project2.jpg"
              alt="Real-time Chat App"
              width={600}
              height={300}
              className={bem.elem('projects-image')}
            />
            <div className={bem.elem('projects-content')}>
              <h3 className={bem.elem('projects-title')}>Real-time Chat Application</h3>
              <p className={bem.elem('projects-description')}>
                A real-time chat application using WebSocket, React, and MongoDB.
                Includes features like private messaging, group chats, and file sharing.
              </p>
              <div className={bem.elem('projects-tags')}>
                <span className={bem.elem('projects-tag')}>React</span>
                <span className={bem.elem('projects-tag')}>WebSocket</span>
                <span className={bem.elem('projects-tag')}>MongoDB</span>
              </div>
              <div className={bem.elem('projects-links')}>
                <a href="#" className={bem.elem('projects-link')}>View Project</a>
                <a href="#" className={bem.elem('projects-link')}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={bem.block(['contact'])}>
        <div className={bem.elem('contact-content')}>
          <h2 className={bem.elem('contact-title')}>Let's Work Together</h2>
          <p className={bem.elem('contact-text')}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="mailto:contact@example.com" className={bem.elem('contact-button')}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
