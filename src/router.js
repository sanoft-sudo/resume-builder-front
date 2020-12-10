import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import JobPost from './pages/JobPost';
import JobSearch from './pages/JobSearch';
import BuildCV from './pages/BuildCV';
import Contacts from './pages/Contacts';

const routes = {
    "/": () => <Home/>,
    "/jobpost": () => <JobPost/>,
    "/jobsearch": () => <JobSearch/>,
    "/buildresume": () => <BuildCV/>,
    "/contact": () => <Contacts/>,
    "/login": () => <Login/>
};
export default routes;