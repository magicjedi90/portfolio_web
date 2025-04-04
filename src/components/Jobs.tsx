import type { Job } from "@/api/types";
import JobCard from "./Job";

interface JobsProps {
    jobs: Job[];
}

export default function Jobs({ jobs }: JobsProps) {
    return (
        <div className="prose py-12">
            <h2>Work Experience</h2>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job}/>
            ))}
        </div>
    );
} 