import mongoose from 'mongoose';

const PreferenceSchema = new mongoose.Schema({
    preferredUI:{
        type:String,
        enum:['covidFirst','managmentFirst']
    },
    preferredCountry:{
        type:String,
    }
})
// module.exports = mongoose.model('User',PreferenceSchema);
export default mongoose.model('Preference',PreferenceSchema)