import {useEffect, useState} from "react";
import {getComments} from "../api/Api";
import Comment from "./comment/Comment";

export default function Comments (){

    let [comment,setComment]= useState([])

    useEffect(()=>{
        getComments().then(response=>{
            setComment(response.data)
        })
    },[])
    return (
        <div>
            {
                comment.map(c=><Comment key={c.id} itemss={c}/>)
            }
        </div>
        );
}