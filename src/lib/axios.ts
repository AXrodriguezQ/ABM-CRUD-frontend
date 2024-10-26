import axios from 'axios';
import { useAuthStore } from '../store/auth';
import { URL_BASE } from './constants';

const authApi = axios.create({
    baseURL: `${URL_BASE}`,
    withCredentials: true,
});

authApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
});

export default authApi;
