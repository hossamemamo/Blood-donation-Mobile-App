const express =require('express');
const router=express.Router();

//mongo db user model
const Request = require('./../models/request');

router.post('/request',(req,res)=>{

   console.log(req.body);

    let {reqNum, bloodNum, email, state}=req.body;
    
    reqNum = reqNum;
    bloodNum = bloodNum;
    email = email;
    state = state;

    const newRequest=new Request({
                        reqNum,
                        bloodNum,
                        email,
                        state,
                    });
                    newRequest.save().then(result=>{
                        res.json({
                            status: "Inserted Successfully",
                            message:"successful",
                            data:result,
                        });
                      });
                    });



router.get('/request', (req, res) => {
  Request.find()
    .then(requests => {
      res.json({
        status: "Success",
        message: "Retrieved requests successfully",
        data: requests,
        count: requests.length
      });
    })
    .catch(error => {
      res.status(500).json({
        status: "Error",
        message: "Failed to retrieve requests",
        error: error.message
      });
    });
});


module.exports =router;