import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Simulate user data for testing
        const users = [
            { email: 'user@example.com', password: 'password' }
        ];

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            setError('');
            // Save user data in local storage or use a state management solution
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/home');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            {error && <div className="text-danger">{error}</div>}
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
