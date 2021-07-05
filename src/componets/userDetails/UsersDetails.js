// import {useParams} from 'react-router-dom';
// import {useEffect, useState} from 'react';
// import {getUser} from '../../services/api'
//
// export default function UsersDetails(props){
//     // const {match:{params:{id}}} = props;
//     const [userDetails, setUserDetails] = useState([])
//     const {id} = useParams();
//
//     useEffect(()=>{
//         getUser(id)
//             .then(value => setUserDetails({...value.data}))
//     },[id])
//
// return(
//     <div>
//         <h3>{userDetails.id} - {userDetails.name}</h3>
//         <p>{userDetails.email}</p>
//     </div>
// );
// }