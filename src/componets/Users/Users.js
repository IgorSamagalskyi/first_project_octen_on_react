import {getUsers} from '../../services/api'
import {useEffect, useState} from 'react';
import { Switch, Route} from 'react-router-dom';


import User from './User';
// import UsersDetails from '../userDetails/UsersDetails';
import UsersDetails_2 from '../userDetails/UsersDetails_2';

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => {
            setUsers([...value.data])
        })
    },[])


return(
    <div>
        {users.map(value => <User key={value.id} item={value}/>)}

        <Switch>
            {/*<Route path={'/users/:id'} component={UsersDetails}/>*/}
            <Route path={'/users/:id'} component={UsersDetails_2}/>
        </Switch>
    </div>
);
}