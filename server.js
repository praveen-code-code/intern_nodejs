const express = require('express');
const mongoose = require('mongoose');
const UserData = require('./model');

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://loginsa80_db_user:eKOnSFD1e7DKyTLO@cluster0.iubw3xb.mongodb.net/")
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


app.put('/update/:id' , async (req,res)=>{
    const {username} = req.body
    const {email} = req.body
    const {Password}= req.body
    try{
        await UserData.findByIdAndUpdate(req.params.id,{username,email,Password},  {new: true});
        return res.json({"message":"user data updated"})
    }
    catch(err){
        console.log(err.message)
    }
})

 app.get('/get_all_data', async (req,res)=>{
    try{
        const allData = await UserData.find();
        return res.json(allData)
    }
    catch (err){
        console.log(err.message)
    }
 })


 app.get("/get_data/:id", async (req,res)=>{
    try{
        const Data = await UserData.findById(req.params.id);
        return res.json(Data);
    }
    catch(err){
        console.log(err.message)
    }
 } )
app.delete('/delete/:id', async (req,res)=>{
    try{
        await UserData.findByIdAndDelete(req.params.id);
        return res.json("user data deleted..")
    }
    catch(err){
        console.log(err.message)
    }
} )
app.delete('/delete/:id1/:id2', async (req,res)=>{
    try{
        await UserData.findByIdAndDelete(req.params.id1);
        await UserData.findByIdAndDelete(req.params.id2);
        return res.json("user data deleted..")
    }
    catch(err){
        console.log(err.message)
    }
} )

app.listen(3000, ()=>console.log("server is running....."))
