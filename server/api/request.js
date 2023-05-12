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

router.post('/status', (req, res) => {
  const { reqNum,status} = req.body;
  console.log(reqNum);
  if (!reqNum) {
    return res.status(400).json({
      status: "Error",
      message: "Missing reqNum in the request body"
    });
  }

  Request.findOneAndUpdate({ reqNum }, { state: status }, { new: true })
    .then(updatedRequest => {
      if (updatedRequest) {
        res.json({
          status: "Success",
          message: "Record updated successfully",
          data: updatedRequest
        });
      } else {
        res.status(404).json({
          status: "Error",
          message: "Record not found"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        status: "Error",
        message: "Failed to update record",
        error: error.message
      });
    });
});



module.exports =router;