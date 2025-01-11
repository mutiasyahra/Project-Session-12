const express = require('express')
const movieController = require('../controllers/movie-controller')
const router = express.Router()

router.get('/api/movies',movieController.searchMovie)
router.get('/api/movies/popular', movieController.getPopularMovies)

module.exports = router