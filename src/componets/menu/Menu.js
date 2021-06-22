import './Menu.css';
export default function Menu(){

return(
    <div>
        <nav className={'flex'}>
            <div><a href="#">Home</a></div>
            <div><a href="#">Todo</a></div>
            <div><a href="#">Galery</a></div>
            <div><a href="#">Blog</a></div>
        </nav>
    </div>
);
}