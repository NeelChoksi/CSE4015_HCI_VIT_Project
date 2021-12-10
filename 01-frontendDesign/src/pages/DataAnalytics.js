import React from 'react';
import map from '../img/map.svg';
import charts from '../img/charts.png';
import numerical from '../img/numerical.jpg';
import prediction from '../img/prediction.jpg';

const DataAnalytics = ()=>{
	
	//CSS Card with grid:
	//CSS image grid: 

	return(
	  <div className="DataAnalytics">
	  <h1>DataAnalytics</h1>

	  <h2>Map Data</h2>
	  <div className="map-grid">
		 
		  <div className="map-grid-item">
		  	<h2>Hospitals</h2>
		  	<h2>Vaccine Centers</h2>
		  	<h2>Cases Count</h2>

		  </div>
		  <div className="map-grid-item">
		  	<img src={map} height="500" width="500" alt=""/>
		  </div>
		 
	  </div>
	  <h2>Numerical Data</h2>
	  <div className="numerical-grid">
		 
		  <div className="numerical-grid-item">
		  	<h2>Active Cases</h2>
		  	<h2>Deaths</h2>
		  	<h2>Recovered</h2>
		  	<h2>Vaccinated</h2>
		  	<h2>Processed DataAnalytics</h2>

		  </div>

		  <div className="numerical-grid-item">
		  	<img src={numerical} height="500" width="500" alt=""/>
		  </div>
	  </div>

	  <h2>Chart Data</h2>
	  <div className="chart-grid">
		 
		  <div className="chart-grid-item">
		  	<h2>Active Cases Timeline</h2>
		  	<h2>Deaths Timeline</h2>
		  	<h2>Recovered Cases Timeline</h2>
		  	<h2>Vaccinated Timeline</h2>
		  	<h2>Regionwise</h2>
		  </div>
		  <div className="chart-grid-item">
		  	<img src={charts} height="500" width="500" alt=""/>
		  </div>


	  </div>
	  <h2>Prediction</h2>

	  <div className="prediction-grid">
		 
		  <div className="prediction-grid-item">
		  	<h2>TimeSeries Prediction of Cases</h2>
		  </div>

		  <div className="prediction-grid-item">
		  	<img src={prediction} height="500" width="500" alt=""/>
		  </div>

	  </div>

	  {/*	
	      <MapData />
	      <NumericalData />
	      <ChartData />
	      <PredictionData />
	      */}
      </div>
	);
}

export default DataAnalytics;