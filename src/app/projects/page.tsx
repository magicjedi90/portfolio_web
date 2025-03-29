'use client';

import { useProjects } from "@/api/hooks";
import Projects from "@/components/Projects";
import QBem from 'qbem';
import styles from './page.module.css';

const bem = new QBem('projects-page');

export default function ProjectsPage() {
    const { projects, isLoading, isError } = useProjects();
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading projects</div>;
    if (!projects) return <div>No projects found</div>;

    return (
        <div className={bem.block()}>
            <h1 className={bem.elem('title', ['primary'])}>My Projects</h1>
            <div className={bem.elem('content')}>
                <Projects projects={projects} />
            </div>
        </div>
    );
}