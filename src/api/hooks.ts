import { SWRConfiguration } from 'swr';
import useSWR from 'swr';
import type { Project } from './types';
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

// Project-specific hooks using the generic useApi
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