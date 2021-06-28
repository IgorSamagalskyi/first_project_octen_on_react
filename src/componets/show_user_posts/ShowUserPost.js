export default function ShowUserPost(item){
    console.log(item.item)
return(
    <div>
        <p>{item.item.id}</p>
        <h1>{item.item.title}</h1>
    </div>
);
}