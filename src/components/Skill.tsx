'use client';

import type { Skill } from "@/api/types";
import QBem from 'qbem';
import styles from './Skill.module.css';

const bem = new QBem('skill');

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className={styles[bem.block()]}>
            <h3 className={styles[bem.elem('title', ['primary'])]}>
                <a href={skill.official_site_url} target="_blank" rel="noopener noreferrer">
                    {skill.name}
                </a>
            </h3>
            <div className={styles[bem.elem('proficiency')]}>
                <span className={styles[bem.elem('proficiency-label')]}>Proficiency:</span>
                <span className={styles[bem.elem('proficiency-value', [skill.proficiency.toLowerCase()])]}>
                    {skill.proficiency}
                </span>
            </div>
            <p className={styles[bem.elem('description')]}>{skill.description}</p>
        </div>
    );
} 