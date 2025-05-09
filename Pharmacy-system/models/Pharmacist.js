const mongoose = require ('mongoose')

const pharmacistScheme = new mongoose.Schema({
    name:String,
    age: {type:Number, required:true},
    education: {type:String, required:true,unique:true},
    certificatePractice:String,
    empId:{type:Number,required:true}
})

module.exports = mongoose.model("Pharmacist",pharmacistScheme)

