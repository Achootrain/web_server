//this file is used to handle the request that update basics table in the database
const express= require('express');
const router= express.Router();
const {certificates} =require("../models");//import the basics model from the models folder (/models/basics.js)


router.get('/', async(req,res) => {
    const data= await certificates.findAll();//find all records in the basics table
    res.json(data); //response: send the data back to the client
});//request-> / ->response-> 

//post(): handling data sent by client ( from front-end web page)
router.post('/', async(req,res) => {
const data= req.body;// req : contain the data sent by client 
await certificates.create(data);// create a new record in the database, await: wait for the async function to finish
res.json(data); // response: send the data back to the client

})
router.post('/delete', async(req,res) => {
    const data= req.body;
    const id=data.id;
    await certificates.destroy({ where: { id:id } });
    res.json("deleted");
})

module.exports= router;