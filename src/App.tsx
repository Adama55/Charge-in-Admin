import React from 'react';

import RoutesFile from './RoutesFile';
import AsideNavbar from './components/AsideNavbar/AsideNavbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <AsideNavbar/>

      <RoutesFile/>
    </div>
  );
}

export default App;
