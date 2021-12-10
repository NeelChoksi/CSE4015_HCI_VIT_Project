import React from 'react';
 
const EmployeeCovidData = ()=>{
	return(
    <div className="CovidData">{/*CUD, VIEW
        <EmployeeDetails />
        <TempOxygen />
        <VaccineLastRep />
        <CovidAffected />
    */}
    <h1>Employee Covid Data Management</h1>
    <h2>Temperature , Oxygen</h2>
        <div className="c-data-grid">
            <div className="c-data-grid-item">
                <form>
                    <div >
                        <div className="input-box">
                          <span className="details">Date</span>
                          <input type="date" placeholder="Enter Name" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Employee ID</span>
                          <input type="text" placeholder="Enter EmpID" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Oxygen Level</span>
                          <input type="number" placeholder="Enter Oxygen Level" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Temperature</span>
                          <input type="number" placeholder="Enter Temperature" required />
                        </div>
                    </div> 

                    <br/>
                    <br/>

                    <div className="btn">
                        Enter Temp,Oxygen
                    </div>


                </form>
            </div>
            <div className="c-data-grid-item">
                <h2>Last Day Data</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Overall Temp,Oxygen Analytics</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Employeewise Temp,Oxygen Analytics</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Covid Suspected employee ids</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Send notice button</h2>
            </div>

          
        </div>   
    <h2>Vaccine Report, Last Covid Test Report</h2>
        <div className="c-data-grid">
            <div className="c-data-grid-item">
                <form>
                    <div >
                        <div className="input-box">
                          <span className="details">First Vaccine Date</span>
                          <input type="date" placeholder="Enter Name" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Second Vaccine Date</span>
                          <input type="date" placeholder="Enter Name" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Employee ID</span>
                          <input type="text" placeholder="Enter EmpID" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Last RTPCR reading</span>
                          <input type="number" placeholder="Enter RTPCR reading" required />
                        </div>   
                    </div> 

                    <br/>
                    <br/>

                    <div className="btn">
                        Submit report
                    </div>


                </form>
            </div>
            <div className="c-data-grid-item">
                <h2>One Time Vaccinated Employees</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Two Time Vaccinated Employees</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Vaccine Details</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Last Covid report details</h2>
            </div>

          
        </div>   
    <h2>Details of employee with covid history</h2>
        <div className="c-data-grid">
            <div className="c-data-grid-item">
                <form>
                    <div >
                        <div className="input-box">
                          <span className="details">Employee ID</span>
                          <input type="text" placeholder="Enter EmpID" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Latest RTPCR</span>
                          <input type="text" placeholder="Enter Latest RTPCR" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Quaraintine details </span>
                          <input type="text" placeholder="Enter Latest Quaraintine Details" required />
                        </div>   
                        <div className="input-box">
                          <span className="details">Other Reports</span>
                          <input type="text" placeholder="Other Reports" required />
                        </div>
                    </div> 

                    <br/>
                    <br/>

                    <div className="btn">
                        Submit Reports
                    </div>


                </form>
            </div>
            <div className="c-data-grid-item">
                <h2>Employees suffered from covid in past</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Employees suffering from covid in present</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Number of days after recovery of employee</h2>
            </div>
            <div className="c-data-grid-item">
                <h2>Quarantine Details of employees suffering / suffered from covid</h2>
            </div>

          
        </div>       

    
    </div>
	);
}

export default EmployeeCovidData;