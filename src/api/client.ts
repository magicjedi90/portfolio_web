/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all jobs
         * @description Returns a list of all jobs in the portfolio
         */
        get: operations["get_jobs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/jobs/{job_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a single job by ID
         * @description Returns a single job if found, or 404 if not found
         */
        get: operations["get_job_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all projects
         * @description Returns a list of all projects in the portfolio
         */
        get: operations["get_projects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/projects/job/{job_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all projects for a specific job
         * @description Returns a list of all projects associated with the specified job
         */
        get: operations["get_projects_by_job"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/projects/skill/{skill_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all projects that use a specific skill
         * @description Returns a list of all projects that use the specified skill
         */
        get: operations["get_projects_by_skill"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/projects/{project_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a single project by ID
         * @description Returns a single project if found, or 404 if not found
         */
        get: operations["get_project_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/skills": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all skills
         * @description Returns a list of all skills in the portfolio
         */
        get: operations["get_skills"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/skills/{skill_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a single skill by ID
         * @description Returns a single skill if found, or 404 if not found
         */
        get: operations["get_skill_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Represents a job in the portfolio */
        Job: {
            company_name: string;
            company_website: string;
            description: string;
            /**
             * Format: date
             * @example 2024-01-01
             */
            end_date?: string | null;
            /** Format: int32 */
            id: number;
            is_current_job: boolean;
            responsibilities: string;
            roles: string;
            /**
             * Format: date
             * @example 2023-01-01
             */
            start_date: string;
        };
        /**
         * @description Represents the proficiency level in a technology
         * @enum {string}
         */
        Proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
        /** @description Represents a portfolio project with its details and metadata */
        Project: {
            /** @description Detailed description of the project */
            description: string;
            /** @description Optional GitHub repository URL for the project */
            github_url?: string | null;
            /**
             * Format: int32
             * @description Unique identifier for the project
             */
            id: number;
            /**
             * Format: int32
             * @description Optional job ID associated with the project
             */
            job_id?: number | null;
            /** @description Title of the project */
            name: string;
            /** @description List of technologies used in the project */
            skills: components["schemas"]["Skill"][];
        };
        /** @description Represents a technology/tool used in projects */
        Skill: {
            /** @description Description of the technology */
            description: string;
            /**
             * Format: int32
             * @description Unique identifier for the technology
             */
            id: number;
            /** @description Name of the technology */
            name: string;
            /** @description Official website URL for the technology */
            official_site_url: string;
            /** Format: int32 */
            parent_id?: number | null;
            /** @description Proficiency level in the technology */
            proficiency: components["schemas"]["Proficiency"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_jobs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of jobs retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Job"][];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_job_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the job to retrieve */
                job_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Job retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Job"];
                };
            };
            /** @description Job not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_projects: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of projects retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"][];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_projects_by_job: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the job to fetch projects for */
                job_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of projects retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"][];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_projects_by_skill: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the skill to fetch projects for */
                skill_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of projects retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"][];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_project_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the project to retrieve */
                project_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Project retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"];
                };
            };
            /** @description Project not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_skills: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of skills retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Skill"][];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_skill_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the skill to retrieve */
                skill_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Skill retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Skill"];
                };
            };
            /** @description Skill not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
