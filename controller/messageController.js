const asyncHandler=require('express-async-handler')
const messageModel=require('../models/messageModel')
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "p3597843@gmail.com",
      pass: "lweqwpphbftsofph",
    },
  });


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
const sendMessage = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }

    const newMessage = await messageModel.create({
        name,
        email,
        message
    });

    const info = await transporter.sendMail({
        from: 'p3597843@gmail.com',
        to: "pratikmali242005@gmail.com",
        subject: "New Message from Portfolio",
        html: `
            <h3>New Message from ${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    });
    console.log("Email sent: %s", info.messageId);
    res.status(201).json(newMessage);
});

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


// @desc Delete All Messages
// @route DELETE /api/messages/delAll
// @access Private
const deleteAll = asyncHandler(async (req, res) => {
    await messageModel.deleteMany({}); // Deletes all messages
    res.status(200).json({ message: "All Messages Deleted Successfully" });
});

module.exports={getMessage,sendMessage,deleteMessage,deleteAll}