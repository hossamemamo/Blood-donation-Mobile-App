const express =require('express');
const router=express.Router();

//mongo db user model
const Request = require('./../models/request');
//sigup
router.post('/request',async (req,res)=>{

    try{
        const request = new Request(req.body);
        await request.save();
          res.status(201).json({ message: 'Data inserted successfully' });
          
  } catch (error) {
    res.status(500).json({ message: 'Error inserting data' });

    }

});

module.exports =router;