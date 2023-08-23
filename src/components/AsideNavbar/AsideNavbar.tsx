import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../asset/images/Logo.png';
import './AsideNavbar.css'

function AsideNavbar () {
    
    return (
        <nav className="asideNavbar">
            <Link to="/">
                <img src={Logo} alt="logo charge in" />
            </Link>
            <Link to="/home">
                Home
            </Link> 
            <Link to="/etudes">
                Etudes
            </Link>           
            

        </nav>
    );
}

export default AsideNavbar;