import Post from './Post'
export default function Posts({items}){
    console.log(items)
return(
    <div>
        {items.map(value => <Post key={value.id} item={valus}/>)}
    </div>
);
}