import './App.css';
import LinkMenu from './routes/LinkMenu'
import Routes from './routes/Routes'

import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <LinkMenu/>

                <Routes/>
            </Router>
        </div>
    );
}

export default App;
