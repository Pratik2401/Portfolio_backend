const asyncHandler=require('express-async-handler')
const messageModel=require('../models/messageModel')

// @desp Get All Messages
// @route /api/messages/get
// access private
const getMessage=asyncHandler(async(req,res)=>{
    const message=await messageModel.find()
    res.status(200).json(message)
})

// @desp Send Message
// @route /api/messages/send
// access public
const sendMessage=asyncHandler(async(req,res)=>{
    const {name,email,message}=req.body
    if(!name || !email || !message){
        res.status(400)
        throw new Error("All Fields are mandatory");
    }
    const Message = await messageModel.create({
        name,
        email,
        message
    });
    res.status(201).json(Message);
})

// @desp Delete Message 
// @route /api/messages/delete
// access private
const deleteMessage=asyncHandler(async(req,res)=>{
    const message=await messageModel.findById(req.params.id)
    if(!message){
        res.status(404)
        throw new Error("Message Not Found");
    }
    await message.deleteOne()
    res.status(200).json({message:"Message Deleted Successfully"})
})

module.exports={getMessage,sendMessage,deleteMessage}