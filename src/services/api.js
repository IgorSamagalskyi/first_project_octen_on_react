import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
});

const getUsers = () => axiosInstance('users');
const getUser = (id) => axiosInstance('users/' + id);
const getUserPosts = (id) => axiosInstance('users/' + id + '/posts');

export {getUsers, getUser, getUserPosts};