var express = require('express');
var router = express.Router();

const User = require("../models/User.model")
const Api = require("../apis/api")

/* GET home page. */
router.get('/', (req, res)=> {
  User.find().then((users)=>
  res.render('index', { title: 'Express', users})
  )
});



module.exports = router;
