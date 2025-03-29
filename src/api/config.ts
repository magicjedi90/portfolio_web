import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add interceptors for error handling
api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error.response?.data || 'Network Error')
);

// Type assertion to ensure the client returns the correct type
export const typedApi = api as unknown as {
    get: <T>(url: string) => Promise<T>;
}; 