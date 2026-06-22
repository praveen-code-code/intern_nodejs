const mongoose = require('mongoose');
const UserData = mongoose.Schema({

      username :{
        type : String,
        required : true
      },
      email:{
        type:String,
        required:true
      },
      Password :{
        type:String,
        required:true
      },
      CreatedAt:{
        type:Date,
        default: Date.now
      }

})

module.exports = mongoose.model("userdata", UserData)