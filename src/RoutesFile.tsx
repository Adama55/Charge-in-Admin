import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Etudes from './pages/Etudes';
import InnerHead from './components/InnerHead/InnerHead';
import InnerMaison from './pages/Maisons/InnerMason';
import Encours from './pages/Maisons/Encours';
import Archives from './pages/Maisons/Archives';

import PublicRoutes from './components/PublicRoutes';

import CeoAdmins from './pages/CeoAdmins';
import ProjectManagers from './pages/ProjectManagers';
import Installateurs from './pages/Installateurs';
import ClientsB2C from './pages/ClientsB2C';
import LoginPage from './pages/Login';

import Bornes from './pages/Bornes';
import Vehicules from './pages/Vehicules';
import Accessoires from './pages/Accessoires';
import Objectifs from './pages/Objectifs';
import Appartements from './pages/Appartements';




function RoutesFile () {
    return (
        <Routes>
            <Route path="/" element ={<InnerHead />}>
             <Route path="/" element ={<Navigate replace to="login" />}/>
             <Route path="/login" element ={< LoginPage/>} />
                
             <Route path="/home" element ={<Home />}/>
                  <Route path="maisons" element ={<InnerMaison/>}>
                    <Route  path="/maisons" element ={<Navigate replace to="encours" />} />
                    <Route path="encours" element ={<Encours/>} />
                    <Route path="archives" element ={<Archives/>} />
                </Route>

                  <Route path="/appartements" element ={<Appartements/>}/>
                 <Route path="/etudes" element ={<Etudes />}/>

                <Route path="/ceoadmins" element ={<CeoAdmins />}/>
                 <Route path="/projectmanagers" element ={<ProjectManagers />}/>
                 <Route path="/installateurs" element ={<Installateurs/>}/>
                 <Route path="/clientsb2c" element ={<ClientsB2C />}/>

                 <Route path="/bornes" element ={<Bornes />}/>
                 <Route path="/vehicules" element ={<Vehicules />}/>
                  <Route path="/accessoirs" element ={<Accessoires />}/>
                 <Route path="/objectifs" element ={<Objectifs />}/>
                
            </Route>
        </Routes>
    );
}

export default RoutesFile;
