import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import City from './containers/City/City';
import Restaurants from './containers/Restaurants/Restaurants';
import Layout from './hoc/Layout/Layout';


function App() {
    let routes = (
        <Switch>
            <Route path="/" exact component={ City }/>
            <Route path="/restaurants" component={ Restaurants }/>
            <Redirect to="/"/>
        </Switch>
    );

    return (
        <Router>
            <Layout>
                { routes }
            </Layout>
        </Router>
    );
}

export default App;
