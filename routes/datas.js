const express = require ('express');
const Data = require('../models/Data'); 
const router = express.Router();

router.get('/new' , (req , res)=>{
    res.render('new' , {data:new Data()})

})
router.get('/:id' , async(req , res)=>{
    const data = await Data.findById(req.params.id)
    res.render('show' , {data:data});

});
router.get ('/edit/:id' ,  async(req, res)=>{
    const data = await Data.findById(req.params.id)
    res.render('edit' , {data:data})

})


router.post('/' , async(req , res)=>{
    let data = new Data({
        name:req.body.name,
        unID:req.body.unID,
        phone:req.body.phone

    })
    try{  
          data = await data.save()
          res.redirect(`/Data/${data.id}`);
    }catch(e){
        console.log(e);
        res.render('new', {data:data});
    }
    
})

module.exports = router;