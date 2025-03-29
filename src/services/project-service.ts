import apiClient from '@/lib/api-client';
import { Project } from '@/types/project';

export const ProjectService = {
    getProjectById: async (id: number): Promise<Project> => {
        const response = await apiClient.get<Project>(`/projects/${id}`);
        return response.data;
    },

    getAllProjects: async (): Promise<Project[]> => {
        const response = await apiClient.get<Project[]>('/projects');
        return response.data;
    }
};