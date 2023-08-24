import React from 'react';
import {Link, useLocation} from 'react-router-dom'

const  ItemsMaison=() =>{

  const location = useLocation()

  return <div className='items-maison'>
            <li>
                <Link to="/maisons/encours" className={location.pathname==='/maisons/encours'?'item_active':''}>Encours</Link>
            </li>
            <li>
                <Link to="/maisons/archives" className={location.pathname==='/maisons/erchives'?'item_active':''}>Archives</Link>
            </li>   
        </div>;
}

export default ItemsMaison;

// equivalent TabNav