const express =require('express');
const router=express.Router();

const bcrypt=require('bcryptjs');

//mongo db user model
const User=require('./../models/user');
//sigup
router.post('/signup',(req,res)=>{
    console.log(req.body);
    let {name,email,password,birthday,bloodType}=req.body;
    name = name;
    email = email;
    password = password;
    birthday = birthday;
    bloodType=bloodType;

    if(name == "" ||email == ""||password==""||birthday==""||bloodType=="")
    {
        res.json({
            status: "FAILED",
            message:"Empty input fields!"
        });
    }else if (!/^[a-zA-Z ]*$/.test(name)){
        res.json({
            status: "FAILED",
            message:"Invalid name entered!"

        })
    }
    else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email)){
        res.json({
            status: "FAILED",
            message:"Invalid Email entered!"

        })
    }
    else if (!new Date(birthday).getTime()){
        res.json({
            status: "FAILED",
            message:"Invalid date of birth entered!"

        })
    }
    else if (password.length <8){
        res.json({
            status: "FAILED",
            message:"Password is too short"

        })
    }
    else
    {
        //check if user already exist
        User.find({email}).then(result=>{
            if(result.length)
            {
                res.json({
                    status:"FAILED",
                    message:"User with provided email already exists"
                })
            }
            else
            {
                const saltRound = 10;
                bcrypt.hash(password,saltRound).then(hashedPassword=>{
                    const newUser=new User({
                        name,
                        email,
                        password:hashedPassword,
                        birthday,
                        bloodType
                    });
                    newUser.save().then(result=>{
                        res.json({
                            status: "SUCCESS",
                            message:"Signup successful",
                            data:result,
                        })
                    })
                    .catch(err =>{
                        res.json({
                            status:"FAILED",
                            message:"an error occured while saving user password!"
                        })
                    })
                })
                .catch(err =>{
                    res.json({
                        status:"FAILED",
                        message:"an error occured while hashing password!"
                    })
                })

                

            }

        }).catch(err=>{
            console.log(err);
            res.json({
                status:"FAILED",
                message:"An error occured while checking for existing user!"
            })
        })
    }


})

//sigin
router.post('/signin',(req,res)=>{
    let {email,password}=req.body;
    email = email;
    password = password;

    if(email ==""||password=="")
    {
        res.json({
            status:"FAILED",
            message:"Empty fields"
        })
    }else{
        User.find({email})
        .then((data)=>{
            if(data.length){
                const hashedPassword=data[0].password;
                bcrypt.compare(password,hashedPassword).then(result=>{
                    if(result)
                    {
                        //password
                        res.json({
                            status:"SUCCESS",
                            message:"Signin Successful",
                            data: data
                        })

                    }
                    else
                    {
                      
                        //password
                        res.json({
                            status:"FAILED",
                            message:"Invalid password entered!",
                            data: data
                        })


                    }
                })
                .catch(err=>{
                    res.json({
                        status:"FAILED",
                        message:"An error occurred while comparing passwords",
                        data: data
                    })

                })
            }else{
                res.json({
                    status:"FAILED",
                    message:"Invalid credentials entered!",
                })


            }
        })
        .catch(err=>{
            res.json({
                status:"FAILED",
                message:"An error occurred while checking for user"
            })

        })
    }

})

module.exports =router;