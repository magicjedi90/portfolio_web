'use client';

import useSWR from 'swr/immutable';
import { ProjectService } from '@/services/project-service';
import { Project } from '@/types/project';

export const useProjects = () => {
    const { data, error, isLoading } = useSWR<Project[]>(
        `/projects`,
        () => ProjectService.getAllProjects()
    );

    return {
        projects: data,
        isLoading,
        isError: error
    };
};