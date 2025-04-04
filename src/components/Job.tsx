'use client';

import type { Job } from "@/api/types";
import QBem from 'qbem';
import styles from './Job.module.css';

const bem = new QBem('job');

export default function JobCard({ job }: { job: Job }) {
    return (
        <div className={styles[bem.block()]}>
            <h3 className={styles[bem.elem('title', ['primary'])]}>{job.roles}</h3>
            <div className={styles[bem.elem('company')]}>
                <a href={job.company_website} target="_blank" rel="noopener noreferrer">
                    {job.company_name}
                </a>
            </div>
            <div className={styles[bem.elem('period')]}>
                {job.start_date} - {job.is_current_job ? 'Present' : job.end_date}
            </div>
            <p className={styles[bem.elem('description')]}>{job.description}</p>
            <div className={styles[bem.elem('responsibilities')]}>
                <h4 className={styles[bem.elem('responsibilities-title')]}>Key Responsibilities:</h4>
                <div className={styles[bem.elem('responsibilities-content')]}>
                    {job.responsibilities}
                </div>
            </div>
        </div>
    );
} 