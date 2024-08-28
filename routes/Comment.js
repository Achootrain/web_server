const {validateToken} = require( "../middleware/authorization");
const express= require('express');
const router= express.Router();
const {comment,basics} =require("../models");

router.post('/findComment',validateToken, async(req,res) => {
    const data=req.body;
    const rec= await comment.findAll({where:{task_id:data.task_id}}); 
    if (rec) {
        // Use Promise.all to run the queries concurrently
        const updatedRecords = await Promise.all(
            rec.map(async (comment) => {
                const user = await basics.findOne({ where: { user_id: comment.user_id } });
                return {
                    ...comment.toJSON(), // Convert the Sequelize instance to a plain object
                    avatar: user ? user.picture : null // Add avatar property
                };
            })
        );
    
        res.json(updatedRecords);
    } else {
        res.json([]);
    }
});

router.post('/createComment',validateToken, async(req,res) => {
const data=req.body
const user_id=req.user.id
data.user_id=user_id
const rec=await comment.create(data);
res.json(rec); 
})



    
module.exports= router;