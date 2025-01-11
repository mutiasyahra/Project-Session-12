const express = require('express')
const movieController = require('../controllers/movie-controller')
const router = express.Router()

router.get('/api/movies',movieController.searchMovie)

module.exports = router