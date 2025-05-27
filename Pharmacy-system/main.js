const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

require("dotenv").config()

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI,{

}).then(()=>console.log("MongoDb connected")).catch((error) => console.error("MongoDb Connection Error", error));

const medicineRoutes = require("./routes/medicine")
const  pharmacistRoutes = require("./routes/pharmacist")
const  pharmacyStoreRoutes = require("./routes/pharmacyStore")

app.use('/medicines',medicineRoutes)
app.use('/pharmacists',pharmacistRoutes)
app.use('/pharmacyStores',pharmacyStoreRoutes)

const Port = process.env.PORT || 5000

app.listen(Port,()=>{
    console.log(`server is running on Port ${Port}`);
})
