import React from 'react';
import {Link} from 'react-router-dom';

const ActionsGrid = ()=>{
	return(
		<div className="ActionsGrid">
			<h1>Actions Grid</h1>

			<div className="actions-grid-container">
				<div className="actions-grid-item">
					<h2>Login/Register</h2>
					<p>Login/Register to the system to save your preferred UI</p>
					<Link to="/login" className="btn">Login</Link>
				</div>

				<div className="actions-grid-item">
					<h2>Preferred UI</h2>
					<p>Select your preferrence of UI according to your interests.</p>
					<Link to="/preferredUI" className="btn">Select Preferred UI</Link>
				</div>

				<div className="actions-grid-item">
					<h2>Data Analytics</h2>
					<p>View Covid 19 Data analytics in the form of Maps, Charts,Numbers, Prediction.</p>
					<Link to="/DataAnalytics" className="btn">View Covid19 Data</Link>
				</div>

				<div className="actions-grid-item">
					<h2>Employee Covid Data</h2>
					<p>Manage Your Employee's Covid Data including daily temperature,oxygen. Vaccination reports.Covid reports of employee having covid history.
					Also send notices to employees suspected of Covid.</p>
					<Link to="/EmployeeCovidData" className="btn">Manage Employee Covid Data</Link>
				</div>

				<div className="actions-grid-item">
					<h2>Employee Site Visit, Quarantine Scheduling</h2>
					<p>Input site visit data of employees and schedule quarantine periods , send notice to the employee for the same.</p>
					<Link to="/EmployeeSiteVisitData" className="btn">Manage Employee Site Visit and Quarantine</Link>
				</div>


			</div>
		</div>
	);
}

export default ActionsGrid; 