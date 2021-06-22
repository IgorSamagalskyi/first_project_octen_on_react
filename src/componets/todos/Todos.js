import './Todos.css';
import Todo from '../todo/Todo';
export default function Todos({items}){
    return(
        <div>
            {
                items.map((value,index) => <Todo key={index} item={value}/>)
            }
        </div>
    );
}