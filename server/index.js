const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();


app.use(cors())
app.use(express.json())

app.get('/create', (req,res)=>{
    res.json({message:"hello world"})
})



const port = 3000;
app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})