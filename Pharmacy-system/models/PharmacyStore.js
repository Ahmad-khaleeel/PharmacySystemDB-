const mongoose = require ('mongoose')

const pharmacyStoreScheme = new mongoose.Schema({
    name:{type:String,required:true, unique:true},
    storeId:Number,
    location:String,
    contactNumber:Number,
    licenseCertificate:{type:String,required:true},
    empId:Number
})

module.exports = mongoose.model("PharmacyStore",pharmacyStoreScheme)