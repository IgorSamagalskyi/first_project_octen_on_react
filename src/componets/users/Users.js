import User from './User'
import React, { useState, useEffect } from 'react';

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                setUsers(response)
            })
    }, [])


return(
    <div>
        {users.map(value => <User key={value.id} item={value}/>)}
    </div>
);
}


