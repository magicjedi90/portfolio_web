// app/projects/[id]/page.tsx
import { ProjectService } from '@/services/project-service';
import { Skill } from '@/types/skill';

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const project = await ProjectService.getProjectById(params.id);

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>

            <h2>Skills Used:</h2>
            <ul>
                {project.skills.map((skill: Skill) => (
                    <li key={skill.id}>
                        {skill.name} ({skill.proficiency})
                    </li>
                ))}
            </ul>
        </div>
    );
}