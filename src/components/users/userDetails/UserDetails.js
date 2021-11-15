import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/API";

export default function UserDetails(props) {
    let {id} = useParams();
    let [user, setUser] = useState([]);
    useEffect(() => {
        getUser(id).then(response => setUser({...response.data}))
    }, [id])
    return (
        <div>
            {user.id}

        </div>
    );
}