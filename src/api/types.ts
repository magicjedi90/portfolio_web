import type { components } from './client';

export type Project = components['schemas']['Project'];
export type Skill = components['schemas']['Skill'];
export type Job = components['schemas']['Job'];
export type Proficiency = components['schemas']['Proficiency'];

export type ProjectCreateDto = Omit<Project, 'id'>;
export type ProjectUpdateDto = Partial<ProjectCreateDto>;

export type SkillCreateDto = Omit<Skill, 'id'>;
export type SkillUpdateDto = Partial<SkillCreateDto>;

export type JobCreateDto = Omit<Job, 'id'>;
export type JobUpdateDto = Partial<JobCreateDto>; 