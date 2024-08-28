const express= require('express');
const router= express.Router();
const {task} =require("../models");//import the basics model from the models folder (/models/basics.js)
const {validateToken} = require( "../middleware/authorization");

router.get('/', async(req,res) => {
    const data= await task.findAll();//wait to find all records in the basics table before sending the response
    res.json(data); //response: parse data to JSON format and send it back to the client
});//request-> / ->response-> 

//post(): handling data sent by client ( from front-end web page)
router.post('/', async(req,res) => {
const data = await task.findAll();
res.json(data); // response: send the data back to the client
})
router.post('/find',validateToken, async(req,res) => {
    const data=req.body;
    const project_id=data.project_id;
    const rec=await task.findAll({where:{project_id:project_id}});
    res.json(rec);
});
router.post('/create',validateToken, async(req,res) => {
    const data=req.body;
    const rec=await task.create(data);
    res.json(rec);
})
    
module.exports= router;