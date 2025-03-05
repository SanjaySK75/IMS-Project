var express = require('express');
var router = express.Router();
var usermodel=require('../Model/usermodel')
var bcrypt=require('bcryptjs')
router.post('/signup',async(req,res)=>{
  const{username,email,password,}=req.body
  const emailfound=await usermodel.findOne({email})
  if(emailfound){
    return res.status(201).json({message:"E mail already registered"})
  }
  const hassedpass=await bcrypt.hash(password,10)
  const newuser=new usermodel({
    username,email,password:hassedpass
  })
  newuser.save().then(res.status(200).json({message:"sign-up successfully"}))
})
router.post('/login',async(req,res)=>{
    const{email,password}=req.body
    let user= await usermodel.findOne({email})
    if(!user){return res.status(404).json({message:"user not found"})}
    if(!user.isVerified){return res.status(404).json({message:"user not verified"})}
    let ismatch=await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(404).json({message:"password is incorrect"})
    }
    res.status(200).json({message:"login successfully"})
})
module.exports = router;