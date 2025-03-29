export interface Job {
    id: number;
    start_date: Date;
    end_date: Date;
    is_current_job: boolean;
    company_name: string;
    company_website: string;
    description: string;
    roles: string;
    responsibilities: string;
}

export type JobCreateDto = Omit<Job, 'id'>;
export type JobUpdateDto = Partial<JobCreateDto>;