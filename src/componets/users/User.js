import Posts from '../posts/Posts';
import {useEffect, useState} from 'react';

export default function User({item}){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/' + item.id + "/posts")
            .then(value=> value.json())
            .then(response=>{
                setPosts(response);
            })
    },[])
    console.log(posts)
    return(
        <div>

          -----------  {item.id} - {item.name} -----------------
            <Posts items={posts}/>
        </div>
    );
}