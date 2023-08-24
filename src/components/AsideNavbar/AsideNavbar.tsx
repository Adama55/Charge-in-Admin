import React from "react";
import { Link } from "react-router-dom";
import ItemsMaison from "../../pages/Maisons/ItemsMaison";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHouseChimney, faPlus, faTh} from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

import Logo from '../../asset/images/Logo.png';
import './AsideNavbar.css'

function AsideNavbar () {
    
    return (
        <nav className="asideNavbar">
            <Link to="/">
                <img src={Logo} alt="logo charge in" />
            </Link>
            <ul className="list-unstyled">
                <li>
                <Link to="/home"><FontAwesomeIcon icon={faThLarge} className="icon-lage"/> Home <FontAwesomeIcon icon={faPlus} /></Link> 
                </li>
            </ul> 
            <p>OPPORTUINITE</p>       
            <ul className="list-unstyled">
                <li>
                    <Link to="/maisons"> Maisons </Link> 
                </li>
                    <ItemsMaison/> 
                <li>
                    <Link to="/appartements"> Appartements </Link> 
                </li> 
                <li>
                <Link to="/etudes"> <FontAwesomeIcon icon={faHouseChimney} className="gridIcon" /> Etudes <FontAwesomeIcon icon={faPlus}/></Link> 
                </li>
            </ul>

            <p>UTILISATEURS</p>       
            <ul className="list-unstyled">
                <li>
                    <Link to="/ceoadmins"> CAO & Admins </Link> 
                </li> 
                <li>
                    <Link to="/projectmanagers">Project Managers </Link> 
                </li> 
                <li>
                    <Link to="/installateurs">Installateurs</Link> 
                </li>
                <li>
                    <Link to="/clientsb2c"> Clients B2C</Link> 
                </li>
            </ul>
            <p>DONNEES</p>       
            <ul className="list-unstyled">
                <li>
                    <Link to="/bornes"> Bornes </Link> 
                </li> 
                <li>
                    <Link to="/vehicules"> Véhicules </Link> 
                </li> 
                <li>
                    <Link to="/accessoirs"> Accessoirs</Link> 
                </li>
                <li>
                    <Link to="/objectifs"> Objectifs</Link> 
                </li>
            </ul>

        </nav>
    );
}

export default AsideNavbar;