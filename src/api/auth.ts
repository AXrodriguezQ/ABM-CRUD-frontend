import axios from "../lib/axios";

export const loginRequest = ( email, password ) => {
    return axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
    })
}

export const addUserRequest = ( body ) => {
    return axios.post('http://127.0.0.1:8000/api/users',body)
}

export const updateUserRequest = ( id, body ) => {
    return axios.patch(`http://127.0.0.1:8000/api/users/${id}`,body)
}

export const userByIdRequest = ( id ) => {
    return axios.get(`http://127.0.0.1:8000/api/users/${id}`)
}

export const userRequest = () => {
    return axios.get('http://127.0.0.1:8000/api/users');
}

export const deleteUserRequest = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
}
