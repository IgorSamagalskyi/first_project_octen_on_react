import Posts from '../posts/Posts';
import {useEffect, useState} from 'react';
export default function User({item, selectUser}){
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

        {item.id} - {item.name} - <button onClick={()=>{
        selectUser(item.id);
    }}>click me</button>
    <Posts items={posts}/>
    </div>
);
}