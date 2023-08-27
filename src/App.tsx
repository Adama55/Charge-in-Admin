import React from 'react';
import { useLocation } from 'react-router-dom';
import RoutesFile from './RoutesFile';
import AsideNavbar from './components/AsideNavbar/AsideNavbar';

import './App.css';



const App: React.FC = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isErrorPage = location.pathname === '*';

    return (
        <div className="App">
            {!isLoginPage && !isErrorPage && <AsideNavbar />}
            <RoutesFile />
        </div>
    );
}

export default App;
