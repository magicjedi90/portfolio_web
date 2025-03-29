import { ProjectService } from '@/services/project-service';

export default async function ProjectsPage() {
    const projects = await ProjectService.getAllProjects();

    return (
        <div>

        </div>
    );
}