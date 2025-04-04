'use client';

import { useSkills } from '@/api/hooks';
import QBem from 'qbem';
import styles from './page.module.css';

const bem = new QBem('skills');

export default function SkillsPage() {
    const { skills, isLoading, isError } = useSkills();

    return (
        <div className={styles[bem.block()]}>
            {/* Hero Section */}
            <section className={styles[bem.elem('hero')]}>
                <div className={styles[bem.elem('hero-content')]}>
                    <h1 className={styles[bem.elem('hero-title')]}>Technical Skills</h1>
                    <p className={styles[bem.elem('hero-description')]}>
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </div>
            </section>

            {/* Skills Overview */}
            <section className={styles[bem.elem('overview')]}>
                <div className={styles[bem.elem('overview-content')]}>
                    <h2 className={styles[bem.elem('section-title')]}>Skills Overview</h2>
                    <div className={styles[bem.elem('overview-grid')]}>
                        <div className={styles[bem.elem('overview-card')]}>
                            <h3 className={styles[bem.elem('overview-title')]}>Frontend</h3>
                            <p>
                                Modern web development with React, TypeScript, and responsive design principles.
                            </p>
                        </div>
                        <div className={styles[bem.elem('overview-card')]}>
                            <h3 className={styles[bem.elem('overview-title')]}>Backend</h3>
                            <p>
                                Server-side development with Node.js, Python, and database management.
                            </p>
                        </div>
                        <div className={styles[bem.elem('overview-card')]}>
                            <h3 className={styles[bem.elem('overview-title')]}>DevOps</h3>
                            <p>
                                Cloud infrastructure, CI/CD pipelines, and containerization expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills List */}
            <section className={styles[bem.elem('skills-list')]}>
                <div className={styles[bem.elem('skills-list-content')]}>
                    <h2 className={styles[bem.elem('section-title')]}>Detailed Skills</h2>
                    {isLoading && (
                        <div className={styles[bem.elem('loading')]}>
                            Loading skills...
                        </div>
                    )}
                    
                    {isError && (
                        <div className={styles[bem.elem('error')]}>
                            Error loading skills. Please try again later.
                        </div>
                    )}

                    {!isLoading && !isError && skills && (
                        <div className={styles[bem.elem('skills-grid')]}>
                            {skills.map((skill) => (
                                <div key={skill.id} className={styles[bem.elem('skill-card')]}>
                                    <h3 className={styles[bem.elem('skill-title')]}>{skill.name}</h3>
                                    <p className={styles[bem.elem('skill-description')]}>{skill.description}</p>
                                    <div className={styles[bem.elem('skill-proficiency')]}>
                                        <div className={styles[bem.elem('proficiency-bar')]}>
                                            <div 
                                                className={styles[bem.elem('proficiency-fill')]}
                                                style={{ width: `${getProficiencyWidth(skill.proficiency)}%` }}
                                            />
                                        </div>
                                        <span className={styles[bem.elem('proficiency-text')]}>
                                            {skill.proficiency}
                                        </span>
                                    </div>
                                    {skill.official_site_url && (
                                        <a
                                            href={skill.official_site_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles[bem.elem('skill-link')]}
                                        >
                                            Official Documentation
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

function getProficiencyWidth(proficiency: string): number {
    switch (proficiency) {
        case 'Beginner':
            return 33;
        case 'Intermediate':
            return 66;
        case 'Expert':
            return 100;
        default:
            return 0;
    }
} 