const express = require('express');
const mongoose = require('mongoose');
const dataRouter = require('./routes/datas');
const app = express();

mongoose.connect('mongodb://localhost/Data' ,
 { useNewUrlParser: true , useUnifiedTopology: true })
 app.use(express.urlencoded({extended:false}))
app.set('view engine' , 'ejs');


app.get('/' , (req , res)=>{
    res.render('home')

});

app.use('/Data', dataRouter)
app.listen (5000 , function(){
    console.log("Server is running ")
})