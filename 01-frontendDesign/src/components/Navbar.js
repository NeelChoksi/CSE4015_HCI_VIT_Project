import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
	return(
		<div className="navbar">
			<h1>Covid19 Tracker</h1>
			<ul className="menu">
				<li><Link to="/actionsGrid">Actions Grid</Link></li>
				<li><Link to="/login">Login</Link></li>
				{/*
				<li><Link to="/DataAnalytics">DataAnalytics</Link></li>
				<li><Link to="/preferredUI">Preferred UI</Link></li>
				<li><Link to="/EmployeeCovidData">Employee Covid Data</Link></li>
				<li><Link to="/EmployeeSiteVisitData">Employee Site Visit Data</Link></li>
				*/}
			</ul>
		</div>
		
	);
}

export default Navbar;