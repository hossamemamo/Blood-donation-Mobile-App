const express =require('express');
const router=express.Router();
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Blood =require('./../models/blood');

router.post('/bloods', (req, res) => {
  const donorRecipientMapping = {
    'A+': ['A+', 'AB+'],
    'A-': ['A+', 'A-', 'AB+', 'AB-'],
    'B+': ['B+', 'AB+'],
    'B-': ['B+', 'B-', 'AB+', 'AB-'],
    'AB+': ['AB+'],
    'AB-': ['AB+', 'AB-'],
    'O+': ['A+', 'B+', 'AB+', 'O+'],
    'O-': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  };

  let {bloodType}=req.body;


  
  // Access recipients for blood type A positive
  const recipientsForTypeAPositive = donorRecipientMapping[bloodType];
  console.log(recipientsForTypeAPositive); // Output: ['A+', 'AB+']
  
  Blood.find({ bloodType: { $in: recipientsForTypeAPositive } })
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