import User from './User'
import UserPosts from '../userPosts/UserPosts';
import {useState} from 'react';
export default function Users(){
    const [users, setUsers] = useState([])


    useEffect(() => {
        getUsers()
            .then(response=>{
                setUsers(response.data)
            })
    },[])


return(
    <div>
        {users.map(value => <User key={value.id} item={value} selectUser={selectUser}/>)}
         <UserPosts items={users} />)}
    </div>
);
}