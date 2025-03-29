import { useProject } from "@/hooks/useProject";
import {Skill} from "@/types/skill";
import QBem from 'qbem';

const bem = new QBem('project');

export default function Project({ id }: { id?: number }) {
    const { project: project, isLoading } = useProject(id ?? 0);

    if (isLoading) return <div>Loading...</div>;
    if (!project) return <div>Project not found</div>;

    return (
        <div className={bem.block()}>
            <h3 className={bem.elem('title', ['primary'])}>{project.name}</h3>
            <div className={bem.elem('metrics', ['primary'])}>
                <span className={bem.elem('metric', ['primary'])}>Github: {project.github_url}</span>
            </div>
            <p className="text-gray-600">{project.description}</p>
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