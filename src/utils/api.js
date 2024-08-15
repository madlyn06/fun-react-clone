import axios from "axios";
import { API_WEB_URL } from "@/const/common";
import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from "./auth";

const api = axios.create({baseURL: API_WEB_URL});

api.interceptors.request.use( async (config) => {
    const accessToken = getAccessToken()
    if (accessToken !== '') {
        config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
})

api.interceptors.response.use(
    res => res,
    async (err) => {
        const { response } = err;
        const originalRequest = response.config;

        if (response.status === 403) {
            const refreshToken = getRefreshToken()
            const { data } = await axios.post(`${API_WEB_URL}/refresh`, {refresh_token: refreshToken});

            setAccessToken(data.access_token)
            setRefreshToken(data.refresh_token)

            originalRequest.headers.Authorization = `Bearer ${data.access_token}`
            originalRequest._retry = true;

            return api(originalRequest);
        }

        return Promise.reject(err.response);
    }
);

export { api };