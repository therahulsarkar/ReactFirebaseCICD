import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Download from './Download';
import User from './User';
import SearchBar from './SearchBar';
import Error from './Error';

const Main = ()=>{
    return(
        <>
        <Menu />
        <Switch>
        {/*Use Render instead of Component when you do not need to pass any props*/}
            <Route exact path="/" component={()=> <About name="Rahul"/> }/> {/*Passing props to about page through Route*/}
            <Route path="/contact" render={()=> <Contact name="Rahul" title="Sarkar"/>}/> {/*We can use Render instead of Component*/}
            <Route path="/download" component={Download}/>
            <Route path="/user/:name/:number" component={User}/> {/*Passing 2 dynamic parameter called ':name and :number, we can pass as many parameters as we want'*/}
            <Route path="/search" component={SearchBar}/>
            {/*As we have passed 2 dynamic parameters we have pass both in the url, otherwise the error page will be rendered by default*/}
            {/*<Route component={Error}/>  If we use this then if the user type any wrong url then Error page will be rendered*/} 
            <Redirect to="/" /> {/*If user types wrong url then the home page will be rendered automatically*/}
            </Switch>
        </>
    )

}

export default Main;

