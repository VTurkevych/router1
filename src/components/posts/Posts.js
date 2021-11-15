import {useEffect, useState} from "react";
import {getPosts} from "../services/API";
import Post from "./post/Post";
import {Route,Routes} from "react-router-dom";
import PostDetails from "./postDetails/PostDetails";

export default function Posts (props){
    let [posts,setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(value => setPosts([...value.data]))
    },[])
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }

            <Routes>
                <Route path=':id' element={<PostDetails/>}/>
            </Routes>
        </div>
        );
}