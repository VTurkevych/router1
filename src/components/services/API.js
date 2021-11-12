import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
});
const getUsers = () => axiosInstance('');
const getUser = (id) => axiosInstance('/' + id);
const getUserPosts = (id) => axiosInstance('/' + id + '/posts')

export {getUsers, getUser, getUserPosts}