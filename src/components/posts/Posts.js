import {useEffect, useState} from "react";
import {getPosts} from "../api/Api";
import Post from "./post/Post";

export default function Posts() {
    let [post, setPost] = useState([])

    useEffect(() => {
        getPosts().then(response=>{
            setPost(response.data)
        })
    }, [])
    return (
        <div>
            {
                post.map(p=><Post key={p.id} item={p}/>)
            }
        </div>
    );
}