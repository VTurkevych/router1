import {BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Users from "./components/users/Users";


export default function App() {



    return (
        <Router>
            <div>
                <Link to={'users'}>Click me</Link>
            </div>

            <Routes>
                <Route path={'/users/*'} element={<Users/>}/>
            </Routes>
        </Router>
    );
}