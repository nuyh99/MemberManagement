import '../scss/App.scss';
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';

function App() {
    // axios.defaults.withCredentials = true;

    return <Routes></Routes>;
}

export default App;
