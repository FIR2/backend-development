require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

data = {
    1:"firox",
    2:"ansari"
}

app.get('/twitter', (req, res) =>{
    res.send("Hello Twitter")
})

app.get('/login',(req,res) => {
    res.send("<h1>this is login page.</h1>")
})

app.get('/jsondata', (req,res) => {
    res.json(data)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})