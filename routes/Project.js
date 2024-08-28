const express= require('express');
const router= express.Router();
const {project,project_joined} =require("../models");//import the basics model from the models folder (/models/basics.js)
const {validateToken} = require( "../middleware/authorization");
const axios = require('axios');

router.post('/managed',validateToken, async(req,res) => {
    const id=req.user.id;
    const data=await project.findAll({where:{manager_id:id}});
    res.json(data); //response: parse data to JSON format and send it back to the client
});//request-> / ->response-> 

//post(): handling data sent by client ( from front-end web page)
router.post('/created',validateToken,async(req,res) => {
    const data= req.body;// req : contain the data sent by client
    data.manager_id=req.user.id;
    const newRecord=await project.create(data);
    const project_id=newRecord.id;
    const user_id=req.user.id;
    const rec=await project_joined.create({manager_id:user_id,user_id:user_id,project_id:project_id});
    res.json({message:"Created project sucessfully"}); // response: send the data back to the client
})

router.post('/find',validateToken,async(req,res) => {
    const data= req.body;
    const id=data.project_id;
    const dt=await project.findOne({where:{id:id}});
    const uid=req.user.id;
    res.json({dt,uid});
})
module.exports= router;