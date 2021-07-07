import { Link} from 'react-router-dom';
import './LinkMenu.css'
export default function LinkMenu(){

return(
    <div className={'flex'}>
        <Link to={'/count-value'}>count value</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/posts'}>Posts Users</Link>
        <Link to={'/coments'}>Users Coments</Link>
    </div>
);
}