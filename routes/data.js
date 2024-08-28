//this file is used to handle the request that update basics table in the database
const express= require('express');
const router= express.Router();
const {certificates,awards,basics,educations,interests,languages,locations,profiles,projects,publications,skills,volunteers,works} =require("../models");//import the basics model from the models folder (/models/basics.js)
const {validateToken} = require( "../middleware/authorization");

router.get('/', async(req,res) => {
res.json("hmmm"); //response: send the data back to the client
});//request-> / ->response-> 
//post(): handling data sent by client ( from front-end web page)
router.post('/',validateToken, async(req,res) => {
    const data= req.body;// req : contain the data sent by client
    const id = req.user.id;
   // response: send the data back to the client
    CreateOrUpdate(interests,id,data.interests_);
    CreateOrUpdate(languages,id,data.languages_);
    CreateOrUpdate(locations,id,data.locations_);
    CreateOrUpdate(profiles,id,data.profiles_);
    CreateOrUpdate(skills,id,data.skills_);
    CreateOrUpdate(basics,id,data.basics_);

    await certificates.bulkCreate(data.certificates_);
    await awards.bulkCreate(data.awards_);
    await educations.bulkCreate(data.educations_);
    await projects.bulkCreate(data.projects_);
    await publications.bulkCreate(data.publications_);
    await volunteers.bulkCreate(data.volunteers_);
    await works.bulkCreate(data.works_);
    res.json("data sent");//response: send the data back to the client

})

router.post('/getData',validateToken, async(req,res) => {
        const id = req.user.id;
        const award=await awards.findAll({ where: { user_id:id } })
        const certificate=await certificates.findAll({ where: { user_id:id } })
        const education=await educations.findAll({ where: { user_id:id } })
        const project=await projects.findAll({ where: { user_id:id } })
        const publication=await publications.findAll({ where: { user_id:id } })
        const volunteer=await volunteers.findAll({ where: { user_id:id } })
        const work=await works.findAll({ where: { user_id:id } })

        const basic=await basics.findOne({ where: { user_id:id } })
        const interest=await interests.findOne({ where: { user_id:id } })
        const language=await languages.findOne({ where: { user_id:id } })
        const location=await locations.findOne({ where: { user_id:id } })
        const profile=await profiles.findOne({ where: { user_id:id } })
        const skill=await skills.findOne({ where: { user_id:id } })
        res.json({award,basic,certificate,education,interest,language,location,profile,project,publication,skill,volunteer,work});    

})

async function CreateOrUpdate(Model,id,data){
 const record= await Model.findOne({ where: { user_id:id } })
    if(!record){
        await Model.create(data)
    }
    else{
        for (const [key, value] of Object.entries(data)) {
            if(value==''){
                continue;
            }
            else{
                await Model.update(
                    { [key]: value }, // Use bracket notation to dynamically set the field
                    { where: { user_id: id } } // Ensure the correct record is updated
                  );               
            }
          }
       
    }
}

module.exports= router;