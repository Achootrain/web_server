const express= require('express');
const router= express.Router();
const {report,users} =require("../models");
const {validateToken} = require( "../middleware/authorization");

router.post('/find_report',validateToken, async(req,res) => {
    const data= req.body;
    const task_id=data.task_id
    const record= await report.findAll({where:{task_id:task_id}});
    const result = await Promise.all(
        record.map(async record => {
          const user = await users.findOne({ where: { id: record.user_id } }); // Fetch username based on user_id
          return {
            ...record.toJSON(),
            username: user.username, // Add the username to the record
          };
        })
      );
      
      // Send the result as the response
      res.send(result)
});

router.post('/create_report', validateToken,async(req,res) => {
const data= req.body;//data sent by the client
const user_id=req.user.id;
const record=await report.create({...data,user_id:user_id});//wait to create a new record in the basics table before sending the response
res.json(data); // response: send the data back to the client
})


    
module.exports= router;