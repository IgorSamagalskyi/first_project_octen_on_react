import './App.css';
import Menu from "./componets/menu/Menu";
import Users from "./componets/users/Users";
import UserDetails from "./componets/user_details/UserDetails";
import {useEffect, useState} from 'react';
import {getUsers, getUser} from './services/API';


export default function App() {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
useEffect(()=>{
getUsers()
    .then(response=>{
        setUsers(response.data)
    })
},[])
function selectUser(id){
    console.log(id)
    getUser(id).then(value => {
        console.log(value.data)
        setUserDetails(value.data)
    })

}


    return (
        <div>
            <Menu/>
            <Users items={users} selectUser={selectUser}/>
            <hr/>
            {userDetails && <UserDetails item={userDetails}/>}
        </div>
    );
}


