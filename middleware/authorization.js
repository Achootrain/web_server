const exp = require("constants");
const {verify}=require("jsonwebtoken");

const validateToken = (req,res,next)=>{
    const acesstoken=req.header("token");
    if(!acesstoken){
        return res.json({error:"User not logged in!"});
    }
    try{
        const validtoken=verify(acesstoken,"xxyyzz112233");
        req.user=validtoken;
        if(validtoken){
            return next();//if token is valid then process to next req
        }
    }   
    catch(err){
        return res.json({error:err});
    }
};

module.exports={validateToken}; 