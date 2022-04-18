import React, {useState} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';

function Routes() {
    const [isAuthorized, setisAuthorized] = useState(false);
    const [showID, setshowID] = useState('');

    // let isAuthorized = sessionStorage.getItem('isAuthorized');

    return (
        <div>
            {isAuthorized === false ? (
                <Redirect to="/" />
            ) : (
                <Redirect to="/search" />
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
                        showID={showID}></SearchPage>
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
