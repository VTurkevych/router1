import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPost} from "../../services/API";

export default function PostDetails (props){
    let {id} = useParams()
    let [post, setPost] = useState([]);
    useEffect(()=>{
        getPost(id).then(value => setPost({...value.data}))
    },[id])
    return (
        <div>
            {post.id} - {post.body}
        </div>
        );
}