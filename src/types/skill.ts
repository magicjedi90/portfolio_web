export interface Skill {
    id: number;
    name: string;
    description: string;
    official_site_url: string;
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export type SkillCreateDto = Omit<Skill, 'id'>;
export type SkillUpdateDto = Partial<SkillCreateDto>;