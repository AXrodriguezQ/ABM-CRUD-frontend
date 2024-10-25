import axios from "../lib/axios";

export const loginRequest = ( email: string, password: string ) => {
    return axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
    })
}

export const addUserRequest = ( body: object ) => {
    return axios.post('http://127.0.0.1:8000/api/users',body)
}

export const updateUserRequest = ( id: string | number, body: object ) => {
    return axios.patch(`http://127.0.0.1:8000/api/users/${id}`,body)
}

export const userByIdRequest = ( id: string | number ) => {
    return axios.get(`http://127.0.0.1:8000/api/users/${id}`)
}

export const userRequest = () => {
    return axios.get('http://127.0.0.1:8000/api/users');
}

export const deleteUserRequest = ( id: string | number ) => {
    return axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
}
