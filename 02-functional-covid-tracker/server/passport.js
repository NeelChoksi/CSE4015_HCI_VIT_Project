import passport from "passport"; // authentication middlewar
import LocalStrategy from 'passport-local/lib/strategy.js';
import JwtStrategy from 'passport-jwt/lib/strategy.js';


// own
import User from './models/User.js';


const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }

    return token;
}


//authorization :after login
passport.use(new JwtStrategy({
    jwtFromRequest:cookieExtractor,
    secretOrKey:"LearinigntoCode"
},(payload,done)=>{
    User.findById({_id:payload.sub},(err,user)=>{
        if(err){
            return done(err,false)
        }
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })
}))

// authenticated local strategy using username , password :login
passport.use(new LocalStrategy((username,password,done)=>{
    User.findOne({username},(err,user)=>{
        // something wrong with database
        if(err){
            return done(err);
        }
        // if user not exists
        if(!user){
            return done(null,false);
        }
        // found the user : check if password is correct
        user.comparePassword(password,done)
    })
}))


export default passport;