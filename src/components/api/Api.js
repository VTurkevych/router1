import axios from 'axios';

let axiosInstance =  axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/users',

});
const getUsers = ()=> axiosInstance.get()



let axiosInstance1 =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const getPosts = ()=> axiosInstance1.get()



let  axiosInstance2 = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
});
const getComments = ()=> axiosInstance2.get()

export {getUsers,getPosts,getComments}
