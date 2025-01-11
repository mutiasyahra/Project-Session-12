const tmdbAPI = require('../config/tmdb')
const cache = require('../config/node-cache')
const parseMovie = require('../models/movie-model')

const searchMovie = async (req,res) => {
    const query = req.query.query
    if(!query){
        return res.status(400).
        json({message:'parameter is required'})
    }

    if(cache.has(query)){
        console.log(`Fetch data from cache`);
        return res.status(200).json(cache.get(query))
    }

    try {
        const response = await tmdbAPI.get('/search/movie',{
            params : {query}
        })

        const movies = response.data.results.map(parseMovie)
        cache.set(query,movies)
        res.status(200).json(movies)

    } catch (error) {
        console.log(error);
    }
}

module.exports = {searchMovie}