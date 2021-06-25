import './App.css';
import Menu from "./componets/menu/Menu";
import Users from "./componets/users/Users";
import React, { useState, useEffect } from 'react';


export default function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                setUsers(response)
            })
    }, [])
    console.log(setUsers)
    // console.log(users)
    return (
        <div>
            <Menu/>
            <Users items={users}/>
        </div>
    );
}



