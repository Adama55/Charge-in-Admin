import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RoutesFile from './RoutesFile';
import AsideNavbar from './components/AsideNavbar/AsideNavbar';

import './App.css';



const App: React.FC = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';


    return (
        <div className="App">
            {!isLoginPage && <AsideNavbar />}
            <RoutesFile />
        </div>
    );
}

export default App;
