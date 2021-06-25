export default function Post({item}){

return(
    <div>
   <button onClick={()=>{
       console.log(item.title)
   }
   }>push me</button>
    </div>
);
}