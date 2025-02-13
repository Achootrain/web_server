const express= require('express');
const router= express.Router();
const {feedback,basics} =require("../models");//import the basics model from the models folder (/models/basics.js)
const {validateToken} = require( "../middleware/authorization");

router.post('/findFeedback',validateToken, async(req,res) => {
    const data=req.body;
    const report_id=data.report_id;
    const manager=await basics.findOne({where:{user_id:data.manager_id}});
    const manager_avatar=manager.picture;
    const dt=await feedback.findAll({where:{report_id:report_id}});
    res.json({dt,manager_avatar});
});//request-> / ->response-> 

//post(): handling data sent by client ( from front-end web page)
router.post('/createFeedback',validateToken,async(req,res) => {
   const data=req.body;
   const rec=await feedback.create(data);
    res.json(rec);
})


module.exports= router;