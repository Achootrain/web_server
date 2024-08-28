const express= require('express');
const router= express.Router();
const {awards} =require("../models");//import the basics model from the models folder (/models/basics.js)

router.get('/', async(req,res) => {
    const data= await awards.findAll();//wait to find all records in the basics table before sending the response
    res.json(data); //response: parse data to JSON format and send it back to the client
});//request-> / ->response-> 

//post(): handling data sent by client ( from front-end web page)
router.post('/', async(req,res) => {
const data = await awards.findAll();
res.json(data); // response: send the data back to the client
})

router.post('/delete', async(req,res) => {
    const data= req.body;
    const id=data.id;
    await awards.destroy({ where: { id:id } });
    res.json("deleted");
})

    
module.exports= router;