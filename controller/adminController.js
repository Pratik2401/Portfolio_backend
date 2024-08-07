const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel'); 
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// @desc Register Admin
// @route POST /api/admin/register
// @access Public
const adminReg = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All Fields are Mandatory");  
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    username,
    password: hashedPassword
  });

  res.status(201).json({
    username: admin.username
  });
});

// @desc Login Admin
// @route POST /api/admin/login
// @access Public
const adminLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All Fields are Mandatory");  
  }

  const admin = await Admin.findOne({ username });  
  if (admin && (await bcrypt.compare(password, admin.password))) {
    const accessToken = jwt.sign({
      user: {
        username: admin.username
      }
    },
    process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30m" });

    res.status(200).json({ accessToken, username: admin.username });
  } else {
    res.status(401);
    throw new Error("Invalid username or password"); 
  }
});

module.exports = { adminReg, adminLogin };
