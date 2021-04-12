import React from 'react';
import Logo from './logo.png'
import Style from '../style/Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav(){
    return(
        <nav className={Style.nav}>
            <img src={Logo} className={Style.logo} alt="logo"/>
            <div className={Style.container}>
               <NavLink exact to = "/"><h4>Home</h4></NavLink> 
               <NavLink to = "/about"><h4>About</h4></NavLink>
               <NavLink to = "contactUs"><h4>Contact Us</h4> </NavLink>    
            </div>
        </nav>
    )
}

export default Nav;