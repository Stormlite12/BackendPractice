require('dotenv').config()
const express = require('express')


const app = express()
const port =4000

app.get('/',(req,res) =>{
    res.send('Hello World!')
})

app.get('/backrooms', (req,res) =>{
    res.send('Welcome to the backrooms')
})

app.get('/login', (req,res) =>{
    res.send('<h1>Please login <h1/>')
})

app.get('/linkedin', (req,res)=>{
    res.send('www.linked.com')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
