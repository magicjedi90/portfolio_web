'use client';

import { useProject } from "@/api/hooks";
import type { Skill } from "@/api/types";
import QBem from 'qbem';
import styles from './Project.module.css';

const bem = new QBem('project');

export default function Project({ id }: { id: number }) {
    const { project, isLoading, isError } = useProject(id);
    
    console.log('Project component state:', { project, isLoading, isError });

    if (isLoading) return <div className={styles[bem.elem('loading')]}>Loading...</div>;
    if (!project) return <div className={styles[bem.elem('not-found')]}>Project not found</div>;
    if (isError) return <div className={styles[bem.elem('error')]}>Error loading project</div>;

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