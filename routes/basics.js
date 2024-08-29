//this file is used to handle the request that update basics table in the database
const express= require('express');
const router= express.Router();
const {basics} =require("../models");//import the basics model from the models folder (/models/basics.js)
const {validateToken} = require( "../middleware/authorization");

router.post('/getUser',validateToken, async(req,res) => {
    const id= req.user.id;
    const data= await basics.findOne({where:{user_id:id}});//find all records in the basics table
    res.json(data.picture);//response->
});//request-> / ->response-> 

//post(): handling data sent by client ( from front-end web page)
router.post('/', async(req,res) => {
const data= req.body;// req : contain the data sent by client 
await basics.create(data);// create a new record in the database, await: wait for the async function to finish
res.json(data); // response: send the data back to the client

})

router.get('/', async(req,res) => {
    const data= await basics.findAll();//find all records in the basics table
    res.json(data);//response->
});//request-> / ->response->

module.exports= router;