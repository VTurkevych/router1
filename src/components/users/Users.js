import {Route, Routes} from "react-router-dom"
import {useEffect, useState} from "react";
import {getUsers} from "../services/API";
import User from "./user/User";
import UserDetails from "./userDetails/UserDetails";

export default function Users (){
    let [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers().then(response=>
        setUsers([...response.data]))
    },[])

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <Routes>
                <Route path=':id' element={<UserDetails/>}/>
            </Routes>
        </div>
        );
}