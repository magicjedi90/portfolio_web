'use client';

import type { Project, Skill } from "@/api/types";
import QBem from 'qbem';
import styles from './Project.module.css';

const bem = new QBem('project');

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className={styles[bem.block()]}>
            <div className={styles[bem.elem('header')]}>
                <h3 className={styles[bem.elem('title', ['primary'])]}>{project.name}</h3>
                {project.github_url && (
                    <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles[bem.elem('github-link')]}
                    >
                        View on GitHub
                    </a>
                )}
            </div>
            
            <div className={styles[bem.elem('content')]}>
                <p className={styles[bem.elem('description')]}>{project.description}</p>
                
                <div className={styles[bem.elem('skills')]}>
                    <h4 className={styles[bem.elem('skills-title')]}>Technologies Used</h4>
                    <ul className={styles[bem.elem('skills-list')]}>
                        {project.skills.map((skill: Skill) => (
                            <li key={skill.id} className={styles[bem.elem('skill-item')]}>
                                <span className={styles[bem.elem('skill-name')]}>{skill.name}</span>
                                <span className={styles[bem.elem('skill-proficiency', [skill.proficiency.toLowerCase()])]}>
                                    {skill.proficiency}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}