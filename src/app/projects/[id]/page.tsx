import { ProjectService } from '@/services/project-service';
import Project from "@/components/Project";

export default async function ProjectPage({ params }: { params: { id: number } }) {
    const project = await ProjectService.getProjectById(params.id);

    return (
        <div>
            <Project id={project.id} />
        </div>
    );
}