import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf/Bookshelf'
import App from '../App'
export default function Routes() {
    return <Switch>

        <Route path='/' exact><App /></Route>
        <Route path="/dashboard" exact>
            <Bookshelf />
        </Route>
    </Switch>
}