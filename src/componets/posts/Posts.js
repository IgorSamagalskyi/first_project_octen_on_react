// // import Post from "../post/Post";
// import {useEffect, useState} from 'react';
//
// export default function Posts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(value => value.json())
//             .then(response => {
//                 setPosts(response);
//             });
//     }, [])
//     return (
//         <div>
//             {/*{posts.map(value => <Post key={value.id} item={value}/>)}*/}
//         </div>
//     );
// }