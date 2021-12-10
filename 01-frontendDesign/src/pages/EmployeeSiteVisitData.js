import React from 'react';

const EmployeeSiteVisitData = ()=>{
	return(
		<div className="SiteVisit">{/*CUD,VIEW
			<SiteVisitEvent />
			<QuarantineEvent />
		  */}
		  <h1>Site Visit Plan, Quarantine Schedule</h1>

		  <h2>Plan Site Visit</h2>
        <div className="c-data-grid">
            <div className="c-data-grid-item">
                <form>
                    <div>
                        <div className="input-box">
                          <span className="details">Start Date</span>
                          <input type="date" placeholder="Enter Name" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">End Date</span>
                          <input type="date" placeholder="Enter Name" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Employee ID</span>
                          <input type="text" placeholder="Enter EmpID" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Location</span>
                          <input type="text" placeholder="Enter Location" required />
                        </div>   
                    </div> 

                    <br/>
                    <br/>

                    <div className="btn">
                        Enter Site Visit Plan
                    </div>
                </form>
            </div>
            <div className="c-data-grid-item">
                <h2>Site Visit for 3 months</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Locations to visit in 3 months</h2>
            </div>

          
        </div>   
        <h2>Schedule Quarantine</h2>
        <div className="c-data-grid">
            <div className="c-data-grid-item">
                <form>
                    <div >
                        <div className="input-box">
                          <span className="details">Start Date</span>
                          <input type="date" placeholder="Enter Name" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">End Date</span>
                          <input type="date" placeholder="Enter Name" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Employee ID</span>
                          <input type="text" placeholder="Enter EmpID" required />
                        </div>   
                    </div> 

                    <br/>
                    <br/>

                    <div className="btn">
                        Send Notice
                    </div>


                </form>
            </div>
            <div className="c-data-grid-item">
                <h2>Previous Quarantine data </h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Current Quarantine Status, Duration </h2>
            </div>

          
        </div>   

		</div>
	)
}

export default EmployeeSiteVisitData;