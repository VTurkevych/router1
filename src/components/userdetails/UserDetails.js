import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../services/API";

export default function UserDetails(props) {
    let {id} = useParams()
    let [user,setUser]= useState([])
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}) )
    }, [id]);

    return (
        <div>
            {user.id} - {user.username}
        </div>
    )
}