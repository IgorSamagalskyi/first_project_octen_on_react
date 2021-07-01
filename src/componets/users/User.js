import {getPosts} from '../../services/API';
import {useState, useEffect} from 'react'
export default function User({item}){
    const [posts, setPosts] = useState(null)


    useEffect(() => {
        getPosts(item.id)
            .then(response=>{
                setPosts(response.data)
            })
    }, [])


return(
    <div>
        <h1>{item.id} - {item.name}</h1>
        <h3>Username {item.username}</h3>
        <p>phone {item.phone}</p>
        <p>street {item.address.street}</p>

    </div>
);
}


