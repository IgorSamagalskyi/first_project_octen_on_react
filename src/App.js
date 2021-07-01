import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import {getUsers} from './services/API';
import Home from './componets/Home/Home'
import User from './componets/users/User'
import UserPost from './componets/userPosts/UserPosts'
import Posts from './componets/posts/Posts'


function App() {


    return (

        <Router>
            <div>
                <nav className={'flex'}>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/users">Users</Link></div>
                    <div><Link to="/posts">All Users Posts</Link></div>
                </nav>
                <Route path={'/'} exact render={() => {
                    return <Home/>;
                }}/>
                <Route path={'/users'} render={() => {
                    return <User/>;
                }}/>
                {/*<Route path={'/users'} component={Users}/>*/}
                <Route path={'/posts'} render={() => {
                    return <UserPost/>;
                }}/>
                {/*<Route path={'/posts'} component={UserPosts}/>*/}
            </div>
        </Router>


    );
}

export default App;
