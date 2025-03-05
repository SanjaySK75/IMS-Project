var express = require('express')
var router = express.Router()
var categorymodel = require('../Model/categorymodel')

router.post('/add', (req, res) => {
    let prod = new categorymodel({
        name: req.body.name,
        desc: req.body.desc,
        date: req.body.date
    })
    prod.save()
        .then(() => res.status(200).json({ message: "Category Added" }))
        .catch(err => res.status(401).json({ message: err }))
})

router.get('/data', async (req, res) => {
    let data = await categorymodel.find()
    res.send(data)
})

router.delete('/delete/:id',async(req,res)=>{
    const deletedProduct = await categorymodel.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted successfully", deletedProduct });
})
module.exports = router