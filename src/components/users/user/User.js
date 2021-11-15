import {Link} from "react-router-dom";

export default function User ({item}){
    return (
        <div>
                {item.name} - <Link to={'' + item.id}>details</Link>

        </div>

        );
}