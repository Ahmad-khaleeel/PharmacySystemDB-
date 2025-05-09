const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

// require("dotenv").config()

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/PharmacyDb',{

}).then(()=>console.log("MongoDb connected")).catch((error) => console.error("MongoDb Cnnection Error", error));

const medicineRoutes = require("./routes/medicine")
const  pharmacistRoutes = require("./routes/pharmacist")
const  pharmacystoreRoutes = require("./routes/pharmacystore")

app.use('/medicines',medicineRoutes)
app.use('/pharmacists',pharmacistRoutes)
app.use('/pharmacystores',pharmacystoreRoutes)

const Port = process.env.PORT || 5000

app.listen(Port,()=>{
    console.log(`server is running on Port ${Port}`);
})
