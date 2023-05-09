const express =require('express');
const router=express.Router();

const Blood =require('./../models/blood');

router.get('/bloods', (req, res) => {
    Blood.find()
      .then((data) => {
        res.json({
          status: "SUCCESS",
          message: "Retrieved all users",
          data: data
        });
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while retrieving users",
          error: err
        });
      });
  });
  






module.exports = router;