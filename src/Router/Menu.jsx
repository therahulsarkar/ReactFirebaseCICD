import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = ()=>{
    return(
        <>
        <div className="menuStyle">
            <NavLink exact activeClassName="active_class" to="/">About us</NavLink>
            <NavLink activeClassName="active_class" to="/contact">Contact Us</NavLink>
            <NavLink activeClassName="active_class" to="/download">Download</NavLink>
            <NavLink activeClassName="active_class" to="/user">User</NavLink>
            <NavLink activeClassName="active_class" to="/search">Search</NavLink>
        </div>
        </>
    )
}

export default Menu;