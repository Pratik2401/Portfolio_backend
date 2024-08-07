const express=require('express')
const app=express()
const cors= require('cors')
const dotenv = require("dotenv").config();
const connectDB=require('./config/dbConnection')
const errorHandler = require("./middlewares/errorHandler");


connectDB()
app.use(cors({ origin: 'https://pratikmali.vercel.app/admin', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  },
  { origin: 'https://pratikmali.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
))
app.use(express.json())
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
const port=process.env.PORT;
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server Running on Port:${port}`)
})