import { SWRConfiguration } from 'swr';
import useSWR from 'swr';
import type { Project, Job, Skill } from './types';
import { fetcher } from './fetcher';

// Generic hook for fetching data
export function useApi<T>(
  url: string | null,
  config?: SWRConfiguration
) {
  const result = useSWR<T>(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    ...config,
  });
  console.log('Hook result:', result);
  return result;
}

// Project-specific hooks
export function useProject(id: number) {
  const { data, error, isLoading } = useApi<Project>(id ? `/projects/${id}` : null);
  return {
    project: data,
    isLoading,
    isError: error
  };
}

export function useProjects() {
  const { data, error, isLoading } = useApi<Project[]>('/projects');
  return {
    projects: data,
    isLoading,
    isError: error
  };
}

export function useProjectsByJob(jobId: number) {
  const { data, error, isLoading } = useApi<Project[]>(jobId ? `/projects/job/${jobId}` : null);
  return {
    projects: data,
    isLoading,
    isError: error
  };
}

export function useProjectsBySkill(skillId: number) {
  const { data, error, isLoading } = useApi<Project[]>(skillId ? `/projects/skill/${skillId}` : null);
  return {
    projects: data,
    isLoading,
    isError: error
  };
}

// Job-specific hooks
export function useJob(id: number) {
  const { data, error, isLoading } = useApi<Job>(id ? `/jobs/${id}` : null);
  return {
    job: data,
    isLoading,
    isError: error
  };
}

export function useJobs() {
  const { data, error, isLoading } = useApi<Job[]>('/jobs');
  return {
    jobs: data,
    isLoading,
    isError: error
  };
}

// Skill-specific hooks
export function useSkill(id: number) {
  const { data, error, isLoading } = useApi<Skill>(id ? `/skills/${id}` : null);
  return {
    skill: data,
    isLoading,
    isError: error
  };
}

export function useSkills() {
  const { data, error, isLoading } = useApi<Skill[]>('/skills');
  return {
    skills: data,
    isLoading,
    isError: error
  };
} 