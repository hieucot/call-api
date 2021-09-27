
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes/routes';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {

    function showContentMenus(routes) {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return <Switch>{result}</Switch>;
    }

    return (
        <>
            <Router>
                <Menu />
                <div className="container">
                    <div className="row">

                        {showContentMenus(routes)}
                    </div>
                </div>
            </Router>
        </>

    );
}







export default App;
