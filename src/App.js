import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import Users from './componets/Users/Users'

export default function App() {

    return (
            <Router>
                <div>
                    <Link to={'/users'}>users page</Link>
                    <Link to={'/posts'}>users page</Link>
                </div>

                <Route path={'/users'} component={Users}/>
                <Route path={'/users'} component={Users}/>
            </Router>
    );
}
