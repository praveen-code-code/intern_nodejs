const express = require('express');
const mongoose = require('mongoose');
const UserData = require('./model');
const bcrypt = require('bcrypt')

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://loginsa80_db_user:eKOnSFD1e7DKyTLO@cluster0.iubw3xb.mongodb.net/")
.then(()=>console.log("databadse connected ....")).catch((err)=>console.log(err.message))


app.post("/signup", async (req,res)=>{
  const {username,email,password}= req.body
    try{
        const existingUser = await UserData.findOne({email})
        if (existingUser){
            return res.json({message:"user already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password,salt);

        const newUser = new UserData({username,email,password:hashed_password});
        await  newUser.save();
        return res.json({
            message :" user signup successful",
            user:{
                username:newUser.username
            }
        })
  }
  catch(err){
    console.log(err.message)
  }

})






app.listen(3000, ()=>console.log("server is running....."))
