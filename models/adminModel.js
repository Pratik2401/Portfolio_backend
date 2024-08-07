const mongoose=require('mongoose')

const adminSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Enter Username"]
    },
    password:{
        type:String,
        required:[true,"Enter Password"]
    }
},{
    timestamps:true
})

const admin=mongoose.model("admin",adminSchema)
module.exports=admin