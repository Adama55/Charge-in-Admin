import {useNavigate} from "react-router-dom"

import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = () => {




	const navigate = useNavigate()
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

	

	//ADMIN
	//USER

	const login = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/home")
	}

	return (
		<>
		<div className="login">
			<h2>Welcome to login page! </h2>
			<p>Please loging to continue</p>
			<Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Entrez votre email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Mot de passe</Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormGroup>
                <Button onClick={login} color="primary" type="submit">Se connecter</Button>
            </Form>			
		</div>
		</>
	)
}

export default LoginForm;
