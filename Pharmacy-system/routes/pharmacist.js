const express = require("express")

const router = express.Router()

const pharmacist = require("../models/Pharmacist")
const Pharmacist = require("../models/Pharmacist")

// add a new medicine
router.post('/',async(req,res)=>{

    try {
        const pharmacist = new Pharmacist(req.body)

        await pharmacist.save()
        
        res.status(201).send(pharmacist)

    } catch (error) {
      res.status(400).send(error)      
    }
})

// get all medicines
router.get("/", async(req,res)=>{

const pharmacist = await Pharmacist.find()

res.send(Pharmacist)
})

// get medicine by id

router.get("/:id",async(req,res)=>{

const pharmacist = await Pharmacist.findOne({id:req.params.id})

if(!pharmacist) return res.status(400).send('this pharmacist is not working here anymore') 

    res.send(pharmacist)
})

//update Medicine info
router.put("/:id",async(req,res)=>{
    const pharmacist = await Pharmacist.findOneAndUpdate({id:req.params.id},req.body)
    if(!pharmacist) return res.status(400).send('this information is not match with our pharmacist ') 
        res.send(pharmacist)
})


// delete Medicine 
router.delete("/:id",async(req,res)=>{
    const clear = await Pharmacist.findOneAndDelete({id:req.params.id})
        if(clear.deleteOne===0) return res.status(400).send("the pharmacist unavailable")
            res.send({Message:'pharmacist his service has been terminated'})
})

module.exports = router;