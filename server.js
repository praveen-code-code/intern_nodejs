const express = require('express');
const mongoose = require('mongoose');
const UserData = require('./model');

const app = express();

app.use(express.json());

mongoose.connect("")
.then(()=>console.log("databadse connected ....")).catch((err)=>console.log(err.message))




app.post('/send_data', async (req,res)=>{
    const {username} = req.body
    const {email} = req.body
    const {Password}= req.body
    try{
        const newData = new UserData({username,email,Password})
        await newData.save()
        return res.json({"message":"Data sended"})
    }
    catch(err){
        console.log(err.message)
    }

})



app.listen(3000, ()=>console.log("server is running....."))
