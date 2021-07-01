import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})
const getUsers = () => axiosInstance.get('/users/');
const getPostsId = (id) => axiosInstance('/users/' + id + '/posts');
const getPosts = () => axiosInstance('/posts');
export {getUsers, getPostsId,getPosts}