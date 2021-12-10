import express from 'express';

import passport from 'passport';
import JWT from 'jsonwebtoken';

// own
import passportConfig from '../passport.js'
import User from '../models/User.js'
import Preference from '../models/Preference.js'

const userRouter = express.Router();

const signToken = userID =>{
    return JWT.sign({
        iss:"LearinigntoCode",
        sub: userID
    },"LearinigntoCode",{expiresIn:"1h"});
}


userRouter.post('/register',(req,res)=>{
    const {username,password,role} = req.body;
    User.findOne({username},(err,user)=>{
        if(err){
            res.status(500).json({message:{msgBody:"Error has occured", msgError:true}});
        }
        if(user){
            res.status(400).json({message:{msgBody:"Username already taken", msgError:true}});
        }else{
            const newUser = new User({
                username,
                password,
                role
            })
            newUser.save(err=>{
                if(err){
                    res.status(500).json({message:{msgBody:"Error has occured", msgError:true}});
                }else{
                    res.status(201).json({message:{msgBody:"A new user created", msgError:false}});
                }
            })
        }
    })
})


userRouter.post('/login',passport.authenticate('local',{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
        const {_id,username,role} = req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly:true,sameSite:true}); // httpOnly prevents js code inside browser(XSS defended)
                                                                        // sameSite : prevents cross side request forgery
        res.status(200).json({isAuthenticated:true,user:{username,role}});
    }
})

userRouter.get('/logout',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.clearCookie();
    res.json({user:{username:"",role:""},success:true})
})

userRouter.post('/preference',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const preference = new Preference(req.body);
    preference.save(err=>{
        if(err){
            res.status(500).json({message:{msgBody:"Error has occured", msgError:true}});
        }
        else{
            req.user.preferences.push(preference);
            req.user.save(err=>{
                if(err){
                    res.status(500).json({message:{msgBody:"Error has occured", msgError:true}});
                }else{
                    res.status(200).json({message:{msgBody:"Preference added successfully", msgError:false}})
                }
            })
        }
    })
})

userRouter.get('/preferences',passport.authenticate('jwt',{session:false}),(req,res)=>{
    User.findById({_id: req.user._id}).populate('preferences').exec((err,document)=>{
        if(err){
            res.status(500).json({message:{msgBody:"Error has occured", msgError:true}});
        }else{
            res.status(200).json({preferences:document.preferences,authenticated:true})
        }
    })
})

userRouter.get('/admin',passport.authenticate('jwt',{session:false}),(req,res)=>{
    if(req.user.role === "admin"){
        res.status(200).json({message:{msgBody:"You are an admin",msgError:false}})
    }
    else{
        res.status(403).json({message:{msgBody:"Not an admin", msgError:true}})
    }
})

userRouter.get('/authenticated',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated:true, user:{username,role}})
})




export default userRouter;