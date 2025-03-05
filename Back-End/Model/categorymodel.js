const mongoose=require('mongoose')
const categoryschema=mongoose.Schema({
    name:String,
    desc:String,
    date:String
},{timestamps:true}
)
const categorymodel=new mongoose.model('catims',categoryschema)
module.exports=categorymodel