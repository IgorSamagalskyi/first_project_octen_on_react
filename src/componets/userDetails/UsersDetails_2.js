
import {useEffect, useState} from 'react';

export default function UsersDetails_2(props){
    const {location:{state}} = props;
    const [userDetails, setUserDetails] = useState([])


    useEffect(()=>{
        setUserDetails({...state})
    },[state])

    return(
        <div>
            <h3>{userDetails.id} - {userDetails.name}</h3>
            <p>{userDetails.email}</p>
        </div>
    );
}

