import Post from './Post'

export default function Posts({items}){

return(
    <div>
        {items && items.map(value => <Post key={value.id} item={value}/>)}
    </div>
);
}