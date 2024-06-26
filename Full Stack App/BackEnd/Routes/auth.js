const express = require("express");
const User = require("../Models/User");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var JWT = require("jsonwebtoken");
var JWT_SCERET="jsonwebtoken";

const router = express.Router();
const fetchuser = require('../MiddleWare/fetchuser');

// ROUTE:1 - creating a user with name email and password
router.get(
  "/creatAuth",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success,  errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Not a Valid, Email already exits..." });
      }

      const salt = await bcrypt.genSalt(10);
      // it returns a promise
      // This will genertes the salt of 10 length
      const securedPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: securedPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtData = JWT.sign(data, JWT_SCERET);
      console.log(jwtData);
      //   res.send(user);
      success=true;
      res.json({success,  jwtData });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Something went wrong ...");
    }
  }
);

// ROUTE:2 - Login the user

router.get(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req.body);
    const success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, message: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // ES6 Syntax
      let user = await User.findOne({ email });

      // let user= User.findOne({email:email});
      if (!user) {
        return res.status(400).json({success,  error: "Sorry user does not exits" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({success,  error: "Sorry user does not exits" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtData = JWT.sign(data, JWT_SCERET);
      success=true;
      console.log(success, jwtData);
      //   res.send(user);
      res.json({ jwtData });
    } catch (err) {}
  }
);

// ROUTE:3 Get Logged in User Details using POST Request

// router.post('/getuser',[validation body],async()=>{})
router.post('/getuser', fetchuser, async()=>{
    try{
        let userId ='123';
        const user = await User.findById(userId).select('-oassword');
        res.send(user);
    }catch(err){

    }
})

module.exports = router;
