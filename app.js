require('dotenv').config()
const express = require('express')
const cors = require('cors')
const movieRouter = require('./routes/movie-router')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/',movieRouter)

app.listen(port, ()=>{
    console.log(`Server Run at http://localhost:${port}/api/movies`);
    
})