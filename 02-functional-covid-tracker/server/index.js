import fetch from 'node-fetch';
// const schedule = require('node-schedule');
import schedule from 'node-schedule';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import passport from 'passport';
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

schedule.scheduleJob('35 09 * * *',()=>{
	fetchDataOnceADay();
})

// console.log(countries);

const getCountry = (iso3)=>{
	const searchedCountry = countries.find(elem => elem.countryInfo.iso3 === iso3 );

	console.log(searchedCountry);

	return searchedCountry;

}


const app = express();

// middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());


// database connection 

mongoose.connect('mongodb://localhost:27017/hcipj',{useNewUrlParser:true,useUnifiedTopology:true},
()=>{
	console.log('successfully connected to database')
})



// proxy server for the covid data





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




// server for office covid data management : authorization

import User from './models/User.js';
import DailyTempOxygen from './models/DailyTempOxygen.js';
import Vaccine from './models/Vaccine.js';
import RTpcr from './models/RTpcr.js';

// const User = require('./models/User')

// add a new user to the database
/*
const adminUserInput = {
	username:"testuser1111",
	password : "123456789",
	role:"admin"
}

const user = new User(adminUserInput);
user.save((err,document)=>{
	if(err){
		console.log(err)
	}
	console.log(document)
})
 */

import userRouter from './routes/User.js';
app.use('/user',userRouter);


// for the covid data management 
const tempOxRouter = express.Router();

tempOxRouter.post('/',async(req,res)=>{
	const response = await new DailyTempOxygen({
		temp: req.body.temp,
		oxygen: req.body.oxygen,
		username:req.body.username
	}).save();

	res.status(200).send(response);

})

app.use('/createTempOx',tempOxRouter)

const vaccineRouter = express.Router();

vaccineRouter.post('/',async(req,res)=>{
	const response = await new Vaccine({
		dose1: req.body.dose1,
		dose2: req.body.dose2,
		username:req.body.username
	}).save();

	res.status(200).send(response);

})
app.use('/createVaccine',vaccineRouter)

const rtpcrRouter = express.Router();

vaccineRouter.post('/',async(req,res)=>{
	const response = await new RTpcr({
		posNeg: req.body.temp,
		username:req.body.username
	}).save();

	res.status(200).send(response);

})
app.use('/createRtpcr',rtpcrRouter)


const allUserInfoRouter = express.Router();

allUserInfoRouter.get('/',async(req,res)=>{
	const employees = await User.find({role:"employee"});
	const rtpcr = await RTpcr.find();
	const vaccine = await Vaccine.find();
	const tempOx = await DailyTempOxygen.find();

	res.status(200).send({employees,rtpcr,vaccine,tempOx})
})

app.use('/allUserInfo',allUserInfoRouter);

const updateStateRouter = express.Router();

updateStateRouter.post('/',async(req,res)=>{
	const filter = {_id:req.body._id}

	const update = {
	 status : req.body.status		
	}

	let doc = await User.findOneAndUpdate(filter,update);
	res.status(200).send(doc);

})
app.use('/updateState',updateStateRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
	console.log(`Server running on port : ${PORT}`);
})


