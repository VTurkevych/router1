import {Link} from "react-router-dom";

export default function Post ({item}){
    return (
        <div>
            {item.title} - <Link to={'' + item.id}>Click me for info</Link>
        </div>
        );
}