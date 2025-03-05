const mongoose=require('mongoose')
const prodschema=mongoose.Schema({
    image: String,
    proname: String,
    category: String,
    price: String,
    brandname: String,
    cost: String,
    quantity: String

},{timestamps:true}
)
const prodmodel=new mongoose.model('proims',prodschema)
module.exports=prodmodel