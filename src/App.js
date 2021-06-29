
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import {getUsers} from './services/API';

import Users from './componets/users/Users'
import Posts from './componets/posts/Posts'
import Menu from "./componets/menu/Menu";


function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
            .then(value => value.json())
            .then(response => {
                console.log(response)
                setUsers(response)
            })
    })

    return (

        <Router>
            <div>


                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
                <Route path={'/users'} render={() => {
                    return <Users/>;
                }}/>

                <Route path={'/posts'} render={() => {
                    return <Posts/>;
                }}/>
            </div>
        </Router>


    );
}

export default App;
