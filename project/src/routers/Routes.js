import React, {useState} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';
import PermissionPage from './PermissionPage';

function Routes() {
    const [isAuthorized, setisAuthorized] = useState(false);
    const [isPermission, setisPermission] = useState(false);
    const [showID, setshowID] = useState('');

    return (
        <div>
            {isAuthorized === false ? (
                <Redirect to="/" />
            ) : isPermission === false ? (
                <Redirect to="/search" />
            ) : (
                <Redirect to="/permission" />
            )}

            <Switch>
                <Route exact path={'/'}>
                    <LoginPage
                        setisAuthorized={setisAuthorized}
                        setshowID={setshowID}></LoginPage>
                </Route>
                <Route exact path={'/search'}>
                    <SearchPage
                        setisAuthorized={setisAuthorized}
                        setisPermission={setisPermission}
                        showID={showID}></SearchPage>
                </Route>
                <Route exact path={'/permission'}>
                    <PermissionPage
                        setisAuthorized={setisAuthorized}></PermissionPage>
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
