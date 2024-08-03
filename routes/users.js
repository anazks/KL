var express = require('express');
var router = express.Router();
var clothModel = require('../Models/Clothmodel');
const Clothmodel = require('../Models/Clothmodel');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let cloths = await Clothmodel.find({Price:0})
    let clothsPrice = await Clothmodel.find({ Price: { $ne: 0 } });

    console.log(cloths,"user end")
    console.log(clothsPrice,"with price")
    res.render('user/Home', { title: 'Express' ,cloths,clothsPrice});
  } catch (error) {
    
  }
  });

module.exports = router;
