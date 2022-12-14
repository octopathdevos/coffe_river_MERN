const User = require('../models/user');
const { errorHandler } =require("../helpers/dbErrorHandler");
const jwt = require('jsonwebtoken'); // to generate autorized token
const { expressjwt: expressJwt } = require("express-jwt");

exports.signup = (req, res) =>{
    console.log('req.body', req.body);
    const user = new User(req.body);
    user.save((err, user)=>{
        if(err){
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    })
};


exports.signin= (req,res)=>{
    //find user based on email
    const { email, password} = req.body;
    User.findOne({email},(err,user)=>{
        if(err || !user){
            return res.status(400).json({
                err:"user dont exist whit that email"
            });
        }
        //if user is found make sure email and password match
        // create authenticate method in user model
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'email and password dont match'
            })
        }
        //GENERATE SIGNED TOKEN
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
        // persist the token as 't' in cooki 
        res.cookie('t',token, {expire:new Date()+ 99999})
    
        const {_id, name, email, role} = user
        return res.json({token, user: { _id, email, name, role}});
    });

}


exports.signout = (req,res) =>{
    res.clearCookie('t');
    res.json({message: 'signout succes'});
}

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "auth",
  });
 

exports.isAuth = (req,res, next)=>{
    let user = req.profile && req.auth && req.profile._id == req.auth._id
        if(!user){
            return res.status(403).json({
                error: "acces denied"
            })
        }
    next()

}


exports.isAdmin = (req, res, next) =>{
    if(req.profile.role === 0){
        return res.status(403).json({
            error: 'admin resorse! acces denied'
        });
    }
    next();
};