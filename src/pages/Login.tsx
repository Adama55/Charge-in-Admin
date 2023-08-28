import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  './Login.css';

import IconLogin from "../asset/images/icon/ion_log-in-outline.png";
import LogoChargein from "../asset/images/Logo.png";
import IconRetour from "../asset/images/icon/iconamoon_arrow-left-2-light.svg";

function LoginPage()  {

	const navigate = useNavigate();

	// Déclaration des états pour gérer les champs du formulaire
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [error, setError] = useState('');

	const handleLogin = () => {
		// on prend un exemple pour simuler la connexion et deconnexion
		const users = [
			{ email: 'nomprenom@example.com', password: 'password' }
		];

		// Recherche d'un utilisateur correspondant aux données entrées
		const user = users.find(u => u.email === email && u.password === password);

		if (user) {
			setError('');
			// Sauvegarde des données utilisateur dans localstorage
			localStorage.setItem('user', JSON.stringify(user));
			navigate('/home');
		} else {
			setError('Invalid email or password');
		}
	};

	const handleForgotPassword = () => {
		// on doit mettre la logique de recuperation de mot de passe en cas d'oublie
	};

	return (
		<div className='sl-login'>
			<div className=' custuMag d-flex justify-content-between mx-3'>
				<p> 
					<a href="#">
						<img src={IconRetour} alt=" icon retour" />
                        Reoutour vers la page d acceuil
					</a>
				</p>
				<img className='sl-logo' src={LogoChargein} alt="log de charge in" />
			</div>

			{/* Formulaire de connexion */}
			<div className="sl-loginField container mt-5">
				<h2 className='header_title '>
                Se connecter 
					<img className='ms-3' src={IconLogin} alt="icon de connexion" />
				</h2>
				<p className='h2_regular sl-p'>Entrez vos identifiants pour accéder à votre espace personnel.</p>
				<div className="mb-3">
					<label htmlFor="email" className="form-label" placeholder='exemple@gmail.com'>Adresse mail</label>
					<input
						type="email"
						className="form-control"
						id="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label" placeholder='votre mot de passe '>Mot de passe</label>
					<input
						type="password"
						className="form-control"
						id="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="mb-3 form-check d-flex justify-content-between align-items-center">
					<input
						type="checkbox"
						className="form-check-input"
						id="rememberMe"
						checked={rememberMe}
						onChange={() => setRememberMe(!rememberMe)}
					/>
					<label className="form-check-label" htmlFor="rememberMe">Se souvenir de moi</label>
					<button className="btn btn-link text-decoration-none" onClick={handleForgotPassword}>Mot de passe oublié ?</button>
				</div>
				{error && <div className="text-danger">{error}</div>}
				<button className="btn btn-primary text-white h2_regular col-12" onClick={handleLogin}>SE CONNECTER</button>
			</div>
		</div>
	);
}

export default LoginPage;