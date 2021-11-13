import fetch from 'node-fetch';
// const schedule = require('node-schedule');
import schedule from 'node-schedule';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import countriesRoutes from './routes/countries.js';


const getCountries = async()=>{
	const getCountriesURL = "https://disease.sh/v3/covid-19/countries";

	const fetch_response = await fetch(getCountriesURL);
	const json = await fetch_response.json();
	// console.log(json);
	return json;
}

let countries;
const fetchDataOnceADay = async()=>{
	countries = await getCountries();
	console.log(countries);
}
// fetchCountriesOnceADay();
// console.log(countries);

// export default countries;

schedule.scheduleJob('56 3 * * *',()=>{
	fetchDataOnceADay();
})

// console.log(countries);

const getCountry = (iso3)=>{
	const searchedCountry = countries.find(elem => elem.countryInfo.iso3 === iso3 );

	console.log(searchedCountry);

	return searchedCountry;

}


const app = express();

app.use(cors());


const getCountriesController = async(req,res)=>{
	try{
		const countriesData = await countries;
		res.status(200).json({
			countriesData
		});
		
	}catch(err){
		res.status(404).json({
			message:err.message
		});
	}
}
const countriesRouter = express.Router();
countriesRouter.get('/',getCountriesController);
app.use('/countries',countriesRouter);

const getCountryController = async(req,res)=>{
	try{
	
		const countryData = getCountry(req.params.id);
		console.log(req)
		res.status(200).json({
			countryData
		})

	}catch(err){
		res.status(404).json({
			message:err.message
		});
	}
}
const countryRouter = express.Router();
countryRouter.get('/',getCountryController);
app.use('/countries/:id',countryRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
	console.log(`Server running on port : ${PORT}`);
})


