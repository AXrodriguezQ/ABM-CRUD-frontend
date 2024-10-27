import axios from "../lib/axios";
import { URL_BASE } from "../lib/constants";

export const loginRequest = ( email: string, password: string ) => {
    return axios.post(`${URL_BASE}/login`, {
        email,
        password,
    })
}

export const addUserRequest = ( body: object ) => {
    return axios.post(`${URL_BASE}/users`,body)
}

export const updateUserRequest = ( id: string | number, body: object ) => {
    return axios.patch(`${URL_BASE}/users/${id}`,body)
}

export const userByIdRequest = ( id: string | number ) => {
    return axios.get(`${URL_BASE}/users/${id}`)
}

export const userRequest = () => {
    return axios.get(`${URL_BASE}/users`);
}

export const deleteUserRequest = ( id: string | number ) => {
    return axios.delete(`${URL_BASE}/users/${id}`);
}

export const changePasswordRequest = ( id: string | number, body: object ) => {
    return axios.patch(`${URL_BASE}/users/password/${id}`, body);
}
