const express= require('express');
const router= express.Router();
const {users} =require("../models");//import the basics model from the models folder (/models/basics.js)
const bcrypt = require('bcryptjs');//hashing the password function
const {sign}=require('jsonwebtoken');//signing the token function

router.get('/', async(req,res) => {
    const data= await users.findAll();//wait to find all records in the basics table before sending the response
    res.json(data); //response: parse data to JSON format and send it back to the client
});//request-> / ->response-> 


//post(): post request to the server
router.post('/', async(req,res) => {
    const {username,password}= req.body;// req : contain the data sent by client 
    const user= await users.findOne({where:{username:username}});//wait to find a record in the basics table that matches the username before sending the response
    if(user){
        res.json({error:"Username already exists!"});
        return;
    }
    bcrypt.hash(password,10).then(
        (hash) => {
            users.create({username,password:hash})
        })
        res.json({mes:"Sucessfully created account"});
}
)
router.post('/login', async(req,res) => {
    const {username,password}= req.body;
    const user= await users.findOne({where:{username:username}});
    if(!user){
        res.json({error:"User not found!"});
        return;
    }
    bcrypt.compare(password,user.password).then(
        (match) => {
            if(!match){
                res.json({error:"Incorrect password!"});
                return;
            }
            const token=sign({username: user.username,id: user.id},"xxyyzz112233");//sign the token with the username and id
            res.json(token);
        }
    )
})

module.exports= router;