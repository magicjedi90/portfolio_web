import { Skill } from "./skill";

export interface Project {
    id: number;
    name: string;
    description: string;
    github_url: string;
    job_id: number;
    skills: Skill[];
}

export type ProjectCreateDto = Omit<Project, 'id'>;
export type ProjectUpdateDto = Partial<ProjectCreateDto>;