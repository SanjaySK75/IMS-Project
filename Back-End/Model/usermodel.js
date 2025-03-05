const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String,
    isVerified:{type:Boolean,default:true}

},{timestamps:true}
)
const usermodel=new mongoose.model('ims',userschema)
module.exports=usermodel