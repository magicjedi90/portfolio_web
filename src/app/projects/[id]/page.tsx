'use client';

import { useProject } from "@/api/hooks";
import ProjectCard from "@/components/Project";
import QBem from 'qbem';
import styles from './page.module.css';

const bem = new QBem('project-page');

export default function ProjectPage({ 
    params 
}: { 
    params: { id: string } 
}) {
    const id = Number(params.id);
    
    if (isNaN(id)) {
        return <div>Invalid project ID</div>;
    }

    const { project, isLoading, isError } = useProject(id);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading project</div>;
    if (!project) return <div>Project not found</div>;

    return (
        <div className={bem.block()}>
            <div className={bem.elem('content')}>
                <ProjectCard project={project} />
            </div>
        </div>
    );
}