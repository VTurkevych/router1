import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
const getUsers = () => axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/' + id);
const getComments = () => axiosInstance('/comments');
const getComment = (id) => axiosInstance('/comments/' + id)
const getPosts = () => axiosInstance('/posts');
const getPost = (id) => axiosInstance('/posts/' + id)


export {getUsers, getPosts, getComments, getUser, getPost, getComment}
