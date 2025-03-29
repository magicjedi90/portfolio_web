import { SWRConfiguration } from 'swr';
import useSWR from 'swr';
import axios from 'axios';
import type { Project } from './types';

// Create axios instance with default config
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add interceptors for error handling
api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error.response?.data || 'Network Error')
);

// Type assertion to ensure the client returns the correct type
const typedApi = api as unknown as {
    get: <T>(url: string) => Promise<T>;
};

// Generic fetcher function
const fetcher = async <T>(url: string): Promise<T> => {
  console.log('Fetching:', url);
  try {
    const response = await typedApi.get<T>(url);
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

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