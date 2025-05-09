const express = require("express")

const router = express.Router()

const medicine = require("../models/Medicine")
const Medicine = require("../models/Medicine")

// add a new medicine
router.post('/',async(req,res)=>{

    try {
        const medicine = new Medicine(req.body)

        await medicine.save()
        
        res.status(201).send(medicine)

    } catch (error) {
        res.status(400).send(error)      
    }
})

// get all medicines
router.get("/", async(req,res)=>{

const medicines = await Medicine.find()

res.send(Medicine)
})

// get medicine by id

router.get("/:id",async(req,res)=>{

const medicine = await Medicine.findOne({id:req.params.id})

if(!medicine) return res.status(400).send('this Medicine is not available') 

    res.send(medicine)
})

//update Medicine info
router.put("/:id",async(req,res)=>{
    const medicine = await Medicine.findOneAndUpdate({id:req.params.id},req.body)
    if(!medicine) return res.status(400).send('this Medicine is not available') 
        res.send(medicine)
})


// delete Medicine 
router.delete("/:id",async(req,res)=>{
    const clear = await Medicine.findOneAndDelete({id:req.params.id})
        if(clear.deleteOne===0) return res.status(400).send("the medicine unavailable")
            res.send({Message:'medicine has been removed'})
})

module.exports = router;