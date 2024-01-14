import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BASEURL, // Replace with your API base URL
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    const user_id = localStorage.getItem('user_id');

    
    if (accessToken) {
      // Attach the access token to the Authorization header
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers["user_id"] = user_id;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
