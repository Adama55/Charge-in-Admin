
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemsMaison from "../../pages/Maisons/ItemsMaison";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faPlus} from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

import Logo from '../../asset/images/Logo.png';
import './AsideNavbar.css'

// déclartion du composant AsideNavbar
function AsideNavbar () {
	// Vérification de l'authentification de l'utilisateur
	const user = localStorage.getItem('user');
	const isAuthenticated = user !== null;

	// Gestion des états pour le lien "Maisons" dans le menu
	const [isMaisonActive, setIsMaisonActive] = useState(false);
	const handleMaisonLinkClick = () => {
		setIsMaisonActive(!isMaisonActive); //afficher/cacher
	};
    
	return (
		<aside>
			{/* Vérifier si l'utilisateur est authentifié */}  
			{isAuthenticated &&  <div className="asideNavbar bg-secondary">

				{/* Contenu pour la version de bureau */}
				<div className='sl-desktop text-white d-md-inline d-none'>           
					<nav className="px-5">
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
									<p className="d-flex mb-0">
										<span><FontAwesomeIcon icon={faHouseChimney} className="" /></span> 
										<span className='ms-2'>Maisons</span>
									</p>
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
									<p className="mb-0"><FontAwesomeIcon icon={faPlus}/></p>
								</Link> 
							</li> 
							<li>
								<Link to="/etudes" className="sl-item-nav" id='sl-desktopId'> 
									<p className="d-flex mb-0">
										<span><FontAwesomeIcon icon={faHouseChimney} className="" /></span> 
										<span className='ms-2'>Etudes</span>
									</p>
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

				{/* Contenu pour la version mobile */}
				<div className=''>
					<nav className="d-md-none d-inline">
						<div className="sl-desktop offcanvas offcanvas-end bg-secondary" id="demo">
							<div className="offcanvas-header">
								<h1 className="offcanvas-title">
									<Link to="/home">
										<img className='mb-4' src={Logo} alt="logo charge in" />
									</Link>
								</h1>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
							</div>
							<div className="offcanvas-body">                
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
											<p className="d-flex mb-0">
												<span><FontAwesomeIcon icon={faHouseChimney} className="" /></span> 
												<span className='ms-2'>Maisons</span>
											</p>
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
											<p className="mb-0"><FontAwesomeIcon icon={faPlus}/></p>
										</Link> 
									</li> 
									<li>
										<Link to="/etudes" className="sl-item-nav" id='sl-desktopId'> 
											<p className="d-flex mb-0">
												<span><FontAwesomeIcon icon={faHouseChimney} className="" /></span> 
												<span className='ms-2'>Etudes</span>
											</p>
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
							</div>
						</div>
						{/* Bouton pour ouvrir le menu mobile */}
						<div className="sl-btMenu container-fluid mt-3">
							<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                Menu
							</button>
						</div>     
					</nav>
				</div>                        
			</div>}
		</aside>
	);
}

export default AsideNavbar;