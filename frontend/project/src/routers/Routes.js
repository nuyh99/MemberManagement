import React, {useState} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';
import PermissionPage from './PermissionPage';

function Routes() {
    const [isAuthorized, setisAuthorized] = useState(false);
    const [isPermission, setisPermission] = useState(false);
    const [showID, setshowID] = useState('');

    // let isAuthorized = sessionStorage.getItem('isAuthorized');

    return (
        <div>
            {/* {isAuthorized === false ? (
                <Redirect to="/" />
            ) : (
                <Redirect to="/search" />
            )} */}

            {isAuthorized === false ? (
                <Redirect to="/" />
            ) : isPermission === false ? (
                <Redirect to="/search" />
            ) : (
                <Redirect to="/permission" />
            )}

            <Switch>
<<<<<<< HEAD
                <Route
                    exact
                    path={
                        '/'
                    }>
=======
                <Route exact path={'/'}>
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
                    <LoginPage
                        setisAuthorized={setisAuthorized}
                        setshowID={setshowID}></LoginPage>
                </Route>
<<<<<<< HEAD
                <Route
                    exact
                    path={
                        '/search'
                    }>
=======
                <Route exact path={'/search'}>
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
                    <SearchPage
                        setisAuthorized={setisAuthorized}
                        setisPermission={setisPermission}
                        showID={showID}></SearchPage>
                </Route>
<<<<<<< HEAD
                <Route
                    exact
                    path={
                        '/permission'
                    }>
=======
                <Route exact path={'/permission'}>
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
                    <PermissionPage
                        setisAuthorized={setisAuthorized}></PermissionPage>
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
