//this file is used to handle the request that update basics table in the database
const express= require('express');
const router= express.Router();
const {languages} =require("../models");//import the basics model from the models folder (/models/basics.js)


router.get('/', async(req,res) => {
    const data= await languages.findAll();//find all records in the basics table
    res.json(data); //response: send the data back to the client
});//request-> / ->response-> 

//post(): posting data to database
router.post('/', async(req,res) => {
const data= req.body;// req : contain the data sent by client 
await languages.create(data);// create a new record in the database, await: wait for the async function to finish
res.json(data); // response: send the data back to the client
})




module.exports= router;