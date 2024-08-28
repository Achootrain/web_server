const express= require('express');
const router= express.Router();
const {validateToken} = require( "../middleware/authorization");

//check if token is valid then return user id and username 
router.post('/', validateToken,async(req,res) => {
    const user= req.user;
    res.json(user);
})
  

module.exports= router;