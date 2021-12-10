import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        min: 6, 
        max: 15
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','employee','dataEntry'],
        required:true
    },
    preferences:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Preference'
    }],
    status:{
        type:String,
        enum:['normal','covidAffectedWFH','normalWFH','quarantinedForSiteVisit','onSiteVisit']
    }
});

// middlewares

// hash password when changing password or when adding new user
UserSchema.pre('save',function(next){
    if(!this.isModified('password')){
        return next();
    }

    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err){
            return next(err);
        }
        this.password = passwordHash;
        next();
    })
})


// compare password provided by the user with the hashed password in the db
UserSchema.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err){
            return cb(err);
        }else{
            if(!isMatch){
                return cb(null,isMatch)
            }
            return cb(null,this); // this is the user object
        }
    })
}


// module.exports = mongoose.model('User',UserSchema);
export default mongoose.model('User',UserSchema)