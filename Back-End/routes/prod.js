var express = require('express')
var router = express.Router()
var prodmodel = require('../Model/prodmodel')

router.post('/add', (req, res) => {
    let prod = new prodmodel({
        image: req.body.image,
        proname: req.body.proname,
        category: req.body.category,
        price: req.body.price,
        brandname: req.body.brandname,
        cost: req.body.cost,
        quantity: req.body.quantity
    })
    prod.save()
        .then(() => res.status(200).json({ message: "Product Added" }))
        .catch(err => res.status(401).json({ message: err }))
})

router.get('/data', async (req, res) => {
    let data = await prodmodel.find()
    res.send(data)
})

router.delete('/delete/:id',async(req,res)=>{
    const deletedProduct = await prodmodel.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully", deletedProduct });
})
module.exports = router