import axios from 'axios';

// Log the API URL for debugging
console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);

// Create axios instance with default config
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'http://localhost:8081', // Remove trailing slash
    headers: {
        'Content-Type': 'application/json',
    },
    // Add CORS headers for production
    ...(process.env.NODE_ENV === 'production' ? {
        withCredentials: false,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    } : {})
});

// Add interceptors for error handling
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error.response?.data || 'Network Error');
    }
);

// Add request interceptor to log all requests
api.interceptors.request.use(
    (config) => {
        console.log('Making request to:', config.url);
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Type assertion to ensure the client returns the correct type
export const typedApi = api as unknown as {
    get: <T>(url: string) => Promise<T>;
}; 