const express=require("express")
const router=express.Router()
const {getMessage,sendMessage,deleteMessage}=require('../controller/messageController')
const validateToken=require('../middlewares/validateToken')

router.route("/get").get(validateToken,getMessage)
router.route("/send").post(sendMessage)
router.route("/delete/:id").delete(validateToken,deleteMessage)

module.exports=router