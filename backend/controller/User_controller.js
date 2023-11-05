const User = require("../model/user");

module.exports.register = function (req, res) {

//first check
 User.findOne({email:req.body.email})
 .then((user) => {
  if(user){
    res.send({message:"user already registered"})
  }else{
    const {name,email,password} = req.body;
    const user = new User({name:name,email:email,password:password});
    user.save()
    .then((ans) => {
       res.send({message:"Succesfully Registered,Please Login Now"})
      })
    .catch((err) => {
      res.send(err);
    })
  }
 })
.catch((err) => res.send(err));
  };



  module.exports.login = function (req, res) {
    // res.send("hello");
    const {email,password} = req.body;
    User.findOne({email:email})
    .then((user) => {
      if(user){
        if(password===user.password){
           res.send({message:"Login Successfully",user:user})   
        }else{
            res.send({message:"Password didnt match"})
        }
    }else{
        res.send({message:"User not found,Please login again"})
    }
    })
    .catch((err) => console.log('error in api',err))
  };
  
  