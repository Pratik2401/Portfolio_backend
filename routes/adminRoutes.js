const express=require('express')
const router=express.Router()
const{adminReg,adminLogin}=require('../controller/adminController')

router.route("/register").post(adminReg)
router.route("/").post(adminLogin)

module.exports=router