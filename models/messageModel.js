const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"]
    },
    message: {
        type: String,
        required: [true, "Please Enter Your Message"]
    }
},{timestamps:true}
);


const Message = mongoose.model('Message', messageSchema);
module.exports = Message;