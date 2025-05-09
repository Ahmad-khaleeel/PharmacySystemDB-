const express = require("express")

const router = express.Router()

const pharmacystore = require("../models/PharmacyStore")
const Pharmacystore = require("../models/PharmacyStore")

// add a new medicine
router.post('/',async(req,res)=>{

    try {
        const pharmacystore = new Pharmacystore(req.body)

        await pharmacystore.save()
        
        res.status(201).send(pharmacystore)

    } catch (error) {
      res.status(400).send(error)      
    }
})

// get all medicines
router.get("/", async(req,res)=>{

const pharmacystore = await Pharmacystore.find()

res.send(pharmacystore)
})

// get medicine by id

router.get("/:id",async(req,res)=>{

const pharmacystore = await Pharmacystore.findOne({id:req.params.id})

if(!pharmacystore) return res.status(400).send('we dont have any information for this pharmacystore') 

    res.send(pharmacystore)
})

//update Medicine info
router.put("/:id",async(req,res)=>{
    const pharmacystore = await Pharmacystore.findOneAndUpdate({id:req.params.id},req.body)
    if(!pharmacystore) return res.status(400).send('this pharmacystore currently unavailable ') 
        res.send(pharmacystore)
})


// delete Medicine 
router.delete("/:id",async(req,res)=>{
    const clear = await pharmacystore.findOneAndDelete({id:req.params.id})
        if(clear.deleteOne===0) return res.status(400).send("the pharmacystore has been closed ")
            res.send({Message:'pharmacist his service has been terminated'})
})

module.exports = router;