import './Todo.css'
export default function Todo({item:{name,lastName,todo}}){
return(
    <div className={'target'}>
        <h2>{name}</h2>
        <h2>{lastName}</h2>
        <p>{todo}</p>
    </div>
);
}