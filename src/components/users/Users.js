import {useEffect, useState} from "react";
import {getUsers} from "../api/Api";
import USer from "./user/USer";

export default function Users (){

    let [users,setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(response=>{
            setUsers(response.data)
        })
    },[])
    return (
        <div>
            {
                users.map(u=><USer key={u.id} items={u}/>)
            }

        </div>
        );
}