import React from 'react';


const PreferredUI =()=>{
  return (
    <div className="RegisterContainer">
   <div className="container">
    <h1 className="title">Preferred UI</h1>
     <form action="#">
      <div className="user-details">
        <div className="input-box">
          <div className="btn-alt">Maps and Numerical First</div>
        </div>

        <div className="input-box">
          <div className="btn-alt">Charts and Prediction First</div>
        </div>
        <div className="input-box">
          <div className="btn-alt">Covid Data Of Employees First</div>
        </div>
        <div className="input-box">
          <div className="btn-alt">Site Visit, Quarantine Scheduling First</div>
        </div>
        
      </div>

      <div className="btn">
        Select UI
      </div>
      <br/>
      <br/>
      <br/>

     </form>

    
    </div>
     
     
    </div>
  );
}

export default PreferredUI;
