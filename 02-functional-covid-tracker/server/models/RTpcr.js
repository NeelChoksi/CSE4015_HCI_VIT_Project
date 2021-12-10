import mongoose from 'mongoose';

const RTpcrSchema = new mongoose.Schema({
    posNeg:{
        type:String,
        enum:['pos','neg']
    },
    username:String
})
// module.exports = mongoose.model('User',PreferenceSchema);
export default mongoose.model('RTpcr',RTpcrSchema);