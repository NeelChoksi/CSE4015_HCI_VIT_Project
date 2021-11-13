
import countries from '../index.js'


export const getCountries = async(req,res)=>{
	try{
		const countries = await countries;
		res.status(200).json({
			countries
		});
		
	}catch(err){
		res.status(404).json({
			message:err.message
		});
	}
}