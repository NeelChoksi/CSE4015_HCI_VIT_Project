import mongoose from 'mongoose';

const DailyTempOxygenSchema = new mongoose.Schema({
    temp:String,
    oxygen:String,
    username:String
    
})
// module.exports = mongoose.model('User',PreferenceSchema);
export default mongoose.model('DailyTempOxygen',DailyTempOxygenSchema);