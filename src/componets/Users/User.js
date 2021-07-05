
import {getUserPosts} from '../../services/api'
import {useState} from 'react';
import {Link} from 'react-router-dom';


import Posts from '../posts/Posts'

export default function User({item}){
    const [posts, setPosts] = useState([])

    return(
        <div>
            <h1>{item.name} - <Link to={{
                pathname: '/users/' + item.id,
                state: item
            }}>user details</Link></h1>
            <br/>
            <button onClick={()=>{
                getUserPosts(item.id).then(value => {
                    setPosts(value.data)
                })
            }
            }>show posts</button>
            <Posts items={posts}/>
            <br/>
        </div>
    );
}