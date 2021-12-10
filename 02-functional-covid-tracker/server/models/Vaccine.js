import mongoose from 'mongoose';

const VaccineSchema = new mongoose.Schema({
    dose1:{
        type:String,
        enum:['yes','no']
    },
    dose2:{
        type:String,
        enum:['yes','no']
    },
    username:String
})
// module.exports = mongoose.model('User',PreferenceSchema);
export default mongoose.model('Vaccine',VaccineSchema);