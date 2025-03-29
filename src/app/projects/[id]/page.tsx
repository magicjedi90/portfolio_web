import { ProjectService } from '@/services/project-service';
import Project from "@/components/Project";
import { Suspense } from 'react';

export default async function ProjectPage({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);
    
    if (isNaN(id)) {
        return <div>Invalid project ID</div>;
    }

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Project id={id} />
            </Suspense>
        </div>
    );
}