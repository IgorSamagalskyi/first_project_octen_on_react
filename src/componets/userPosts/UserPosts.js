import {getPostsId} from '../../services/API';
import {useState, useEffect} from 'react'
//
import UserPost from './UserPost'

const POSTS = ({item}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPostsId(item.id)
            .then(response=>{
                setPosts(response.data)
            })
    }, [])

    return (
        <div>
            {posts.map(value => <UserPost key={value.id} item={value}/>)}
            <hr/>
        </div>
    )
}

export default function UserPosts({items}){

return(
    <div>
        {items.map(value => <POSTS key={value.id} item={value}/>)}
    </div>
);
}