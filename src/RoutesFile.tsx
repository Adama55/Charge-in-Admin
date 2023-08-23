import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Etudes from './pages/Etudes/Etudes';
import InnerContent from './components/InnerContent/InnerContent';



function RoutesFile () {
    return (
        <Routes>
            <Route path="/" element ={<InnerContent />}>
                <Route path="/" element ={<Navigate replace to="home" />}/>
                <Route path="/home" element ={<Home />}/>
                <Route path="/etudes" element ={<Etudes />}/>  
            </Route>
        </Routes>
    );
}

export default RoutesFile;
