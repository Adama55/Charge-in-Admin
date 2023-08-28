import React from 'react';
import { useLocation } from 'react-router-dom';
import RoutesFile from './RoutesFile';
import AsideNavbar from './components/AsideNavbar/AsideNavbar';

import './App.css';



const App: React.FC = () => {
	const location = useLocation();

	// Vérification si la page actuelle est la page de connexion
	const isLoginPage = location.pathname === '/login';

	// Vérification si la page actuelle est une page d'erreur
	const isErrorPage = location.pathname === '*';

	return (
		<div className="App">
			
			{/* Affiche la barre de navigation latérale sauf sur la page de connexion et les pages d'erreur */}
			{!isLoginPage && !isErrorPage && <AsideNavbar />}
			<RoutesFile />
		</div>
	);
}

export default App;
