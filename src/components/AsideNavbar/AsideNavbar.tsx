import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ItemsMaison from "../../pages/Maisons/ItemsMaison";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faPlus} from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

import { Button, Offcanvas, OffcanvasHeader,OffcanvasBody } from 'reactstrap';

import Logo from '../../asset/images/Logo.png';
import './AsideNavbar.css'

function AsideNavbar () {
    const navigate = useNavigate();

    const user = localStorage.getItem('user');
    const isAuthenticated = user !== null;

    const handleLogout = () => {
        // Remove user data from local storage or state management solution
        localStorage.removeItem('user');
        navigate('/login');
    };


    ///
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };
    
    return (
       <>     
      {isAuthenticated &&  <div className="bg-secondary">            
             <nav className="asideNavbar col- bg-secondary ps-3 d-md-inline d-none ">
                <Link to="/home">
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
                    <Link to="/etudes" className="d-flex align-items-center"> 
                        <p className="d-none d-md-flex"><FontAwesomeIcon icon={faHouseChimney} className="gridIcon" /> </p>
                        <p className="ms-3 col-2 col-md-4">Etudes </p>
                        <p className="ms-3"><FontAwesomeIcon icon={faPlus}/></p>
                    </Link> 
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

            <nav className="asideNavbar col- ps-3 d-md-none d-inline ">
                <Button color="secondary" onClick={toggleOffcanvas} className="">
                    Menu
                </Button>

                <Offcanvas
                    isOpen={isOpen}
                    toggle={toggleOffcanvas}
                    scroll
                    backdrop
                    placement="start"
                    className="bg-secondary col-12"
                    
                >
                    <OffcanvasHeader>
                        <h5 className="offcanvas-title">Backdrop with scrolling</h5>
                        <button className="btn-close" onClick={toggleOffcanvas}></button>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                    </OffcanvasBody>
                </Offcanvas>
            </nav>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>                            
        </div>}
        </>
    );
}

export default AsideNavbar;