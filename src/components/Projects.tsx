import type { Project } from "@/api/types";
import ProjectCard from "./Project";

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <div className="prose py-12">
            <h2>Featured Projects</h2>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    );
}