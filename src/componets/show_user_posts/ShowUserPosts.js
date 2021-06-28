import ShowUserPost from './ShowUserPost'

export default function ShowUserPosts({items}){
    console.log('k;ugliugliygvli', items)
return(
    <div>
        {items && items.map((userPost, i) => <ShowUserPost key={i} item={userPost}/>)}
    </div>
);
}