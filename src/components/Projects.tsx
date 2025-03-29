import {useProjects} from "@/hooks/useProjects";

export default function Project() {
    const {projects: projects, isLoading} = useProjects();
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="prose py-12">
            <h2>Featured Projects</h2>
            {projects?.map((project) => (
                <Project key={project.id}/>
            ))}

        </div>
    )
}