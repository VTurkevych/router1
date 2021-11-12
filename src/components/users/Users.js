import {useEffect, useState} from "react";
import {getUsers} from "../services/API";
import User from "../user/User";
import {Route, Routes} from "react-router";
import UserDetails from "../userdetails/UserDetails";
import UserDetails2 from "../user-details2/UserDetails2";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response =>
            setUsers([...response.data])
        )
    }, []);

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }

            <Routes>
                <Route path=':id' element={<UserDetails/>}/>
                {/*<Route path=':id' element={<UserDetails2/>}/>*/}

            </Routes>
        </div>
    );
}