'use client';

import { useProject } from "@/hooks/useProject";
import {Skill} from "@/types/skill";
import QBem from 'qbem';
import styles from './Project.module.css';

const bem = new QBem('project');

export default function Project({ id }: { id: number }) {
    const { project, isLoading, isError } = useProject(id);

    if (isLoading) return <div className={styles[bem.elem('loading')]}>Loading...</div>;
    if (isError) return <div className={styles[bem.elem('error')]}>Error loading project</div>;
    if (!project) return <div className={styles[bem.elem('not-found')]}>Project not found</div>;

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