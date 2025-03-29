import { ProjectService } from '@/services/project-service';
import { Skill } from '@/types/skill';

export default async function ProjectsPage() {
    const projects = await ProjectService.getAllProjects();

    return (
        <div>
            {projects.map((project) => (<div key={project.id}>{project.name}</div>))}
        </div>
    );
}