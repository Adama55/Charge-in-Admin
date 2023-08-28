import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

import IconNotification from "../../asset/images/icon/icon_notifications.svg";
import "./InnerHead.css";

function InnerHead () {
	// Utilisation des hooks pour la gestion de l'état
	const location = useLocation();
	const isLoginPage = location.pathname === '/login';
	
	const [popoverVisible, setPopoverVisible] = useState(false);
	const [popoverNotifVisible, setPopoverNotifVisible] = useState(false);

	// Interface pour les données de l'utilisateur connecté
	interface UserConnected {
		id: number;
		firstName: string;
		lastName: string;
		nNotifications: number;
	}

	// Données fictives de l'utilisateur connecté
	const userConnected: UserConnected[] = [
		{
			id: 1,
			firstName: "Prénom",
			lastName: "Nom",
			nNotifications: 1
		},
	];
	const navigate = useNavigate();

	// Fonction de déconnexion
	const handleLogoutInPopover = () => {
		localStorage.removeItem('user');
		navigate("/login")
		window.location.reload(); // Redirige ou met à jour la page après la déconnexion
	};

	// Contenu du popover de notifications
	const popoverNotification = (
		<Popover id="popover-basic">
			<Popover.Body>
				<h2 className='h2_semi-bold'>Notifications</h2>
				<hr />
				<button className="sl-userFirstChar btn btn-link ms-4">
					{userConnected[0]?.firstName.charAt(0)}
				</button>
				<p>
					{userConnected[0]?.firstName} {userConnected[0]?.lastName} a ajouté un installateur <br /> il y a 3 jours
				</p>
			</Popover.Body>
		</Popover>
	);

	// Contenu du popover de profil utilisateur
	const popoverUser = (
		<Popover id="popover-basic">
			<Popover.Header as="h3" className='bg-white'>
				Profil
			</Popover.Header>
			<Popover.Body>
				<p>Informations personnelles</p>
				<p>Changer mon mot de passe</p>
				<Button className="text-white" variant="primary" onClick={handleLogoutInPopover}>
					Déconnexion
				</Button>
			</Popover.Body>
		</Popover>
	);

	return (
		<div className='sl-innerHead'>
			{!isLoginPage && (
				<header className='d-flex justify-content-end align-items-center'>
					<div className=''>
						<span className='sl-nom mx-3'>Bonjour <span className='text-primary'>{userConnected[0].firstName} {userConnected[0].lastName}</span></span>
						<span>
							<OverlayTrigger
								trigger="click"
								placement="bottom"
								show={popoverNotifVisible}
								overlay={popoverNotification}
								rootClose
								onToggle={setPopoverNotifVisible}
							>
								<button className="btn btn-link">
									<span className="position-relative">
										<img src={IconNotification} alt="notification icom" />
										<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
											{userConnected[0].nNotifications}
										</span>
									</span>
								</button>
							</OverlayTrigger>
						</span>
					</div>
					<OverlayTrigger
						trigger="click"
						placement="bottom"
						show={popoverVisible}
						overlay={popoverUser}
						rootClose
						onToggle={setPopoverVisible}
					>
						<button className="sl-userFirstChar btn btn-link ms-4">
							{userConnected[0]?.firstName.charAt(0)}
						</button>
					</OverlayTrigger>
				</header>
			)}
			<hr />
			<Outlet /> {/* Rendu de la sortie */}
		</div>
	);
}

export default InnerHead;
