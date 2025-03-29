'use client';

import Projects from "@/components/Projects";
import QBem from 'qbem';
import styles from './page.module.css';

const bem = new QBem('projects-page');

export default function ProjectsPage() {
    return (
        <div className={bem.block()}>
            <h1 className={bem.elem('title', ['primary'])}>My Projects</h1>
            <div className={bem.elem('content')}>
                <Projects />
            </div>
        </div>
    );
}