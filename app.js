require('dotenv').config()
const express = require('express')
const cors = require('cors')
const movieRouter = require('./routes/movie-router')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/',movieRouter)

app.listen(port, ()=>{
    console.log(`Server Run at http://localhost:${port}/api/movies`);
    
})