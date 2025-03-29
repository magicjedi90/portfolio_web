'use client';

import useSWR from 'swr/immutable';
import { ProjectService } from '@/services/project-service';
import { Project } from '@/types/project';

export const useProject = (id: number) => {
    const { data, error, isLoading } = useSWR<Project>(
        `/projects/${id}`,
        () => ProjectService.getProjectById(id)
    );

    return {
        project: data,
        isLoading,
        isError: error
    };
};