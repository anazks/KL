var express = require('express');
var router = express.Router();
var clothModel = require('../Models/Clothmodel');
const Clothmodel = require('../Models/Clothmodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/Login', { title: 'Express' });
});
router.get('/home',async function(req,res){
    try {
      let cloths = await clothModel.find()
      console.log(cloths,"-----")
      res.render('admin/Home',{cloths})
    } catch (error) {
      
    }
   
})
router.get('/forms',function(req,res){
  res.render('admin/forms')
})
router.post("/addProduct",async (req,res)=>{
  try {
    console.log(req.body,req.files)
   let Cloth = await  clothModel.create(req.body)
   let {image} = req.files;
   image.mv('./public/images/products/'+Cloth._id+".jpg").then((err)=>{
    if(!err){
      res.redirect('/admin/home')
    }
   })
  } catch (error) {
    console.log(error)
  }
})
router.get('/delete/:id',async (req,res)=>{
    try {
      console.log(req.params.id)
      let deletedCloth = await Clothmodel.findOneAndDelete({_id:req.params.id})
      res.redirect('/admin/home')
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;
