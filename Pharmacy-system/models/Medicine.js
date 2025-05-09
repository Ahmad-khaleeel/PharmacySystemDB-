const mongoose = require ('mongoose')

const medicineScheme = new mongoose.Schema({
    name: String,
    id:Number,
    dosAge:{type:String, required:true},
    madeBy:String,
    desc: {type:String, required:true},
    dateUse: Number
})

module.exports = mongoose.model("Medicine",medicineScheme)

