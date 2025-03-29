import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add interceptors for error handling or auth
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error.response?.data || 'Network Error')
);

export default apiClient;