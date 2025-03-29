'use client';

import type { Project, Skill } from "@/api/types";
import QBem from 'qbem';
import styles from './Project.module.css';

const bem = new QBem('project');

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className={styles[bem.block()]}>
            <h3 className={styles[bem.elem('title', ['primary'])]}>{project.name}</h3>
            <div className={styles[bem.elem('metrics', ['primary'])]}>
                <span className={styles[bem.elem('metric', ['primary'])]}>Github: {project.github_url}</span>
            </div>
            <p className={styles[bem.elem('description')]}>{project.description}</p>
            <h2 className={styles[bem.elem('skills-title')]}>Skills Used:</h2>
            <ul className={styles[bem.elem('skills-list')]}>
                {project.skills.map((skill: Skill) => (
                    <li key={skill.id} className={styles[bem.elem('skill-item')]}>
                        {skill.name} ({skill.proficiency})
                    </li>
                ))}
            </ul>
        </div>
    );
}