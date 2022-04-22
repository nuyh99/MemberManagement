import '../scss/App.scss';
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';

function App() {
    axios.defaults.withCredentials = true;

    return (
        <Routes></Routes>
        // <Switch>
        //     <Route exact path={'/'}>
        //         <LoginPage></LoginPage>
        //     </Route>
        //     {/* <Route exact path={'/permission'}>
        //         <PermissionPage></PermissionPage>
        //     </Route> */}
        //     <Route exact path={'/search'}>
        //         <SearchPage></SearchPage>
        //     </Route>
        // </Switch>
    );
}

export default App;
