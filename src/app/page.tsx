import { QBem } from 'qbem';
const bem = new QBem('portfolio');

export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <section className={bem.block()}>
        <div className={bem.elem('hero-content', ['primary'])}>
          <h1 className={bem.elem('hero-title', ['primary'])}>Jesse Michael Sindbad McIntosh</h1>
          <p className={bem.elem('hero-subtitle', ['primary'])}>
            Senior Lead Software Developer specializing in full-stack development
            with expertise in React, Node.js, and cloud technologies.
          </p>
          <div className={bem.elem('hero-cta', ['primary'])}>
            <a href="#projects" className={bem.elem('hero-button', ['primary'])}>
              View Projects
            </a>
            <a href="#contact" className={bem.elem('hero-button', ['primary'])}>
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
