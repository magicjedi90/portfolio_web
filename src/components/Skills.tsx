import type { Skill } from "@/api/types";
import SkillCard from "./Skill";

interface SkillsProps {
    skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <div className="prose py-12">
            <h2>Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill}/>
                ))}
            </div>
        </div>
    );
} 