import '../scss/App.scss';
import React, {useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'}>
                    <LoginPage></LoginPage>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
