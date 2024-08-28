const express= require('express');
const router= express.Router();
const {project_joined,project,users,basics} =require("../models");//import the basics model from the models folder (/models/basics.js)
const {validateToken} = require( "../middleware/authorization");
const { Op,col } = require("sequelize");


router.post('/', validateToken,async(req,res) => {
    const data = req.body;
    const unique_id=data.unique_id;
    const password=data.password;
    const record=await project.findOne({where:{unique_id:unique_id}});
    if(record){
         if(record.password==password&&record.manager_id!==req.user.id&&record.user_id!==req.user.id){
            await project_joined.create({manager_id:record.manager_id,user_id:req.user.id,project_id:record.id});
            res.json({message:"Project joined"});
        }else if(record.manager_id==req.user.id){
            res.json({error:"You are the manager of this project"});
        }
        else if(record.user_id==req.user.id){
            res.json({error:"You have already joined this project"});}
    }
    else{
        res.json({error:"No project found"});
    }
});


router.post('/joined',validateToken,async(req,res) => {
    const id=req.user.id;
    const record=await project_joined.findAll({where:{
        user_id:id,
        manager_id:{[Op.ne]:col('user_id')}
    }});
    const data=[];
    if(record){
        for(let i=0;i<record.length;i++){
            const project_id=record[i].project_id;
            const project_record=await project.findOne({where:
            {id:project_id,

            }});
            data.push(project_record);
        }
        res.json(data);
    }

});

router.post('/find',validateToken,async(req,res) => {
    const data=req.body;
    const id=data.project_id;
    const record=await project_joined.findAll({where:{
        manager_id:{[Op.ne]:col('user_id')},
        project_id:id
    },
    });
    const user_joined=[];
    if(record){
        for(let i=0;i<record.length;i++){
            const user={username:"",realname:"",bachelor:"",avatar:""}
            const user_id=record[i].user_id;
            const user_record=await users.findOne({where:{id:user_id}});
            const basic_record=await basics.findOne({where:{user_id:user_id}});
            if(user_record){
            user.username=user_record.username;}
            if(basic_record){
            user.realname=basic_record.name;
            user.bachelor=basic_record.degree;
            user.avatar=basic_record.picture;}
            user_joined.push(user);
        }
        res.json(user_joined);
    }
});
module.exports= router;