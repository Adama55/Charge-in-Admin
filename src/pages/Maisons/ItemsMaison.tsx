import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import "./ItemsMaison.css"

const  ItemsMaison=() =>{

	const location = useLocation()

	return <div className='items-maison'>
		<p>
			<Link to="/maisons/encours" className={location.pathname==='/maisons/encours'?'item_active':''}>Encours</Link>
		</p>
		<p>
			<Link to="/maisons/archives" className={location.pathname==='/maisons/archives'?'item_active':''}>Archives</Link>
		</p>   
	</div>;
}

export default ItemsMaison;

// equivalent TabNav