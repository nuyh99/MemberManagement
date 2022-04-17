import '../scss/App.scss';
import React, {useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';
import axios from 'axios';

function App() {
    return (
        <Switch>
            <Route exact path={'/'}>
                <LoginPage></LoginPage>
            </Route>
            <Route exact path={'/search'}>
                <SearchPage></SearchPage>
            </Route>
        </Switch>
    );
}

export default App;
