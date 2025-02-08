const express=require("express")
const router=express.Router()
const {getMessage,sendMessage,deleteMessage,deleteAll,sendchocomail}=require('../controller/messageController')
const validateToken=require('../middlewares/validateToken')

router.route("/get").get(validateToken,getMessage)
router.route("/send").post(sendMessage)
router.route("/delete/:id").delete(validateToken,deleteMessage)
router.route("/delAll").delete(validateToken,deleteAll)
router.route("/send-email").delete(sendchocomail)
module.exports=router
