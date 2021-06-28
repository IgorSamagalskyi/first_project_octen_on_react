import UserPosts from '../posts/UserPosts';
import ShowUserPosts from '../show_user_posts/ShowUserPosts'
import {useEffect, useState} from 'react';
import {getUserPosts} from '../../services/API';
export default function User({item, selectUser}){
     const [showUserPosts, setShowUserPosts] = useState(null);

    function getUserAllPosts(id){
        getUserPosts(id).then(value => {
            setShowUserPosts(value.data)
        })
    }
return(
    <div>
        {item.id} - {item.name}
        - <button onClick={()=>{
        // console.log('button from AppUser', item.id)
        selectUser(item.id);
    }}>click me</button>
    <UserPosts item={item} getUserAllPosts={getUserAllPosts}/>
        {showUserPosts && <ShowUserPosts items={showUserPosts}/>}
    </div>
);
}