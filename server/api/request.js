const express =require('express');
const router=express.Router();

//mongo db user model
const Request = require('./../models/request');

router.post('/request',(req,res)=>{

   console.log(req.body);

    let {email,name,reqNum,status,donationType}=req.body;
    email = email;
    name = name;
    reqNum = reqNum;
    status = status;
    donationType=donationType;

    const newRequest=new Request({
                        email,
                        name,
                        reqNum,
                        status,
                        donationType
                    });
                    newRequest.save().then(result=>{
                        res.json({
                            status: "Inserted Successfully",
                            message:"successful",
                            data:result,
                        });
                      });
                    });

module.exports =router;