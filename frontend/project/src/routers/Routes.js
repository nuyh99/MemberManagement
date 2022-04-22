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
                <Redirect to="http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/" />
            ) : isPermission === false ? (
                <Redirect to="http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/search" />
            ) : (
                <Redirect to="http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/permission" />
            )}

            <Switch>
                <Route
                    exact
                    path={
                        'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/'
                    }>
                    <LoginPage
                        setisAuthorized={setisAuthorized}
                        setshowID={setshowID}></LoginPage>
                </Route>
                <Route
                    exact
                    path={
                        'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/search'
                    }>
                    <SearchPage
                        setisAuthorized={setisAuthorized}
                        setisPermission={setisPermission}
                        showID={showID}></SearchPage>
                </Route>
                <Route
                    exact
                    path={
                        'http://ec2-50-18-213-243.us-west-1.compute.amazonaws.com:3000/permission'
                    }>
                    <PermissionPage
                        setisAuthorized={setisAuthorized}></PermissionPage>
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
