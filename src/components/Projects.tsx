import {useProjects} from "@/hooks/useProjects";
import Project from "./Project";

export default function Projects() {
    const {projects: projects, isLoading} = useProjects();
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="prose py-12">
            <h2>Featured Projects</h2>
            {projects?.map((project) => (
                <Project key={project.id} id={project.id}/>
            ))}
        </div>
    )
}