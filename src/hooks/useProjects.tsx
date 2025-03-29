import useSWR from 'swr';
import { ProjectService } from '@/services/project-service';
import { Project } from '@/types/project';

export const useProjects = () => {
    const { data, error, isLoading } = useSWR<Project>(
        `/projects`,
        () => ProjectService.getAllProjects()
    );

    return {
        projects: data,
        isLoading,
        isError: error
    };
};