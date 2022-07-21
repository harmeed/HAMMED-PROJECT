const express = require('express');
const hammedblog = require ('../model/hammedblog');
const hammedrouter = express.Router();



hammedrouter.post('/create', async(req, res)=>{
    console.log(req.body);
    const name= req.body.name;
    const title= req.body.title;
    const age= req.body.age;
    const email= req.body.email;
    const isMarried= req.body.isMarried;
    const occupation= req.body.occupation;
    

    const NewhammedRouter = new hammedblog({
        name,
        title,
        age,
        email,
        isMarried,
        occupation,
    });
    NewhammedRouter.save();
    return res.status(201).json('successful');
});

hammedrouter.get("/admin", async(req, res)=>{
    const id = req.params.id;
    const hammed_getAll = await hammedblog.getAll(id);


})



module.exports= hammedrouter;