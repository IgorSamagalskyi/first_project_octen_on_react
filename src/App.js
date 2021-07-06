import './App.css';
import Todos from "./componets/todos/Todos";
import Menu from "./componets/menu/Menu";
import Posts from "./componets/posts/Posts";


let todos = [
    {
        name: 'bart',
        lastName: 'simpson',
        todo: 'goHome'
    },
    {
        name: 'Megi',
        lastName: 'simpson',
        todo: 'goCinema'
    },
    {
        name: 'Nort',
        lastName: 'simpson',
        todo: 'goRestorant'
    },
    {
        name: 'Sasha',
        lastName: 'simpson',
        todo: 'goWork'
    }
]




function App() {
    // let postList = state[0];
    // let setPostList = state[1];

    return (
        <div>
            <Menu/>
            <Todos items={todos}/>
            <Posts/>
        </div>
    );
}

export default App;
