const express = require('express');
const mongoose = require('mongoose');
const UserData = require('./model');

const app = express();

mongoose.connect("")
.then(()=>console.log("databadse connected ....")).catch((err)=>console.log(err.message))








app.listen(3000, ()=>console.log("server is running....."))
