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
        localStorage.removeItem('user');
        navigate('/login');
    };


    ///
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };

    const [isMaisonActive, setIsMaisonActive] = useState(false);
    const handleMaisonLinkClick = () => {
        setIsMaisonActive(!isMaisonActive);
      };
    
    return (
        <aside>     
        {isAuthenticated &&  <div className="asideNavbar">
            <div className='sl-desktop bg-secondary text-white'>           
             <nav className=" ps-3 d-md-inline d-none ">
                <Link to="/home">
                    <img className='mb-4' src={Logo} alt="logo charge in" />
                </Link>
                
                <ul className="list-unstyled">
                    <li>
                        <Link to="/home" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0"><span><FontAwesomeIcon icon={faThLarge} className="" /></span><span className='ms-2'>Accueil</span></p>
                        </Link> 
                    </li> 
                </ul> 
                <p className='sl-itemsTitle'>OPPORTUINITE</p>       
                <ul className="list-unstyled">
                    <li>
                        <Link
                            to="/maisons"
                            className={isMaisonActive ? ' maison-active sl-item-nav' : 'sl-item-nav'}
                            onClick={handleMaisonLinkClick}
                            id='sl-desktopId'
                            >
                            <p className="d-flex mb-0"><span><FontAwesomeIcon icon={faHouseChimney} className="" /></span> <span className='ms-2'>Maisons</span></p>
                            <p className="mb-0"><FontAwesomeIcon icon={faPlus}/></p>                            
                        </Link>
                    </li>
                    <li>{isMaisonActive && <ItemsMaison/> }</li>
                    <li>
                        <Link to="/appartements" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>Appartements</span>
                            </p>
                        </Link> 
                    </li> 
                    <li>
                        <Link to="/etudes" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0"><span><FontAwesomeIcon icon={faHouseChimney} className="" /></span> <span className='ms-2'>Etudes</span></p>
                            <p className="mb-0"><FontAwesomeIcon icon={faPlus}/></p>
                        </Link> 
                    </li>
                </ul>

                <p className='sl-itemsTitle'>UTILISATEURS</p>       
                <ul className="list-unstyled">                
                    <li>
                        <Link to="/ceoadmins" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>CAO & Admins</span>
                            </p>
                        </Link> 
                    </li> 
                    <li>
                        <Link to="/projectmanagers" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2 text-nowrap'>Project Managers</span>
                            </p>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/installateurs" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>Installateurs</span>
                            </p>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/clientsb2c" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>Clients B2C</span>
                            </p>
                        </Link> 
                    </li>
                </ul>
                <p className='sl-itemsTitle'>DONNEES</p>       
                <ul className="list-unstyled">
                    <li>
                        <Link to="/bornes" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>Bornes</span>
                            </p>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/vehicules" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>Véhicules</span>
                            </p>
                        </Link> 
                    </li> 
                    <li>
                        <Link to="/accessoirs" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>Accessoirs</span>
                            </p>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/objectifs" className="sl-item-nav" id='sl-desktopId'> 
                            <p className="d-flex mb-0">
                                <span><FontAwesomeIcon icon={faThLarge} className="" /></span>
                                <span className='ms-2'>Objectifs</span>
                            </p>
                        </Link> 
                    </li>
                </ul>
            </nav>
            </div> 

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
            {/*<button className="btn btn-primary" onClick={handleLogout}>Logout</button> */}                           
        </div>}
        </aside>
    );
}

export default AsideNavbar;