const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    unID:{
        type:String, 
        required:true
    }, 
    phone:{
        type:String, 
        required:true
    }

})

module.exports= mongoose.model('Data' , DataSchema);