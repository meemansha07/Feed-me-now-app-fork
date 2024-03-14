const express = require('express')
const router = express.Router()
const User = require('../models/User')

const { body, validationResult } = require('express-validator');
router.post("/creatuser", [
body('email').isEmail(),body('name').isLength({ min: 5}),body('password').isLength({min:5})],async (req,res)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
        return res.ststus(400),json({errors: errors.array() });
  }

  try {
    await User.create({
        name: "Shyam Das",
        password:"123456",
        email: "shyamdas12@hotmail.com",
        location: "Qwerty edrfef"
    })
    res.json({success:true});
  } catch (error) {
    console.log(error)
    res.json({success:false});
  }
})

module.exports = router;