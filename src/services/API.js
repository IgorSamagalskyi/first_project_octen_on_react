// const getUsers = ()=>{
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
// }
//
// const getUser = (id)=>{
//     return fetch('https://jsonplaceholder.typicode.com/users/' + id)
//         .then(value => value.json());
// }


import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    // headers:{}
})
const getUsers = () => axiosInstance();
const getUser = (id) => axiosInstance('/' + id);
export {getUsers, getUser}