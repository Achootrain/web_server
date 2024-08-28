//this file is used to handle the request that update basics table in the database
const express= require('express');
const router= express.Router();
const {works} =require("../models");//import the basics model from the models folder (/models/basics.js)


router.get('/', async (req,res) => {
    const data= await works.findAll();
    res.json(data);
});

router.post('/', async(req,res) => {
const data= req.body;
await works.create(data);
res.json(data); 
})

router.post('/delete', async(req,res) => {
    const data= req.body;
    const id=data.id;
    await works.destroy({ where: { id:id } });
    res.json("deleted");
})




module.exports= router;