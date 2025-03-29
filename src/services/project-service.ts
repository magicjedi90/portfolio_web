import apiClient from '@/lib/api-client';
import type { Project } from '@/api/types';
import { AxiosResponse } from 'axios';

export const ProjectService = {
    getProjectById: async (id: number): Promise<Project> => {
        const response: AxiosResponse<Project> = await apiClient.get<Project>(`/projects/${id}`);
        return response.data;
    },

    getAllProjects: async (): Promise<Project[]> => {
        const response: AxiosResponse<Project[]> = await apiClient.get<Project[]>('/projects');
        return response.data;
    }
};