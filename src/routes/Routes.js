import {Route} from 'react-router-dom';
import CountComponent from '../componets/countComponent/CountComponent'
import Posts from '../componets/posts/Posts'
import Users from '../componets/users/Users'
import Coments from '../componets/coments/Coments'


export default function Routes(){

return(
    <div>
            <Route path={'/count-value'} component={CountComponent}/>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
            <Route path={'/coments'} component={Coments}/>
    </div>
);
}