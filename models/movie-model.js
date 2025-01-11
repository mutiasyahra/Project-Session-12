const parseMovie = (MovieData)=>{
    return{
        id : MovieData.id,
        title:MovieData.title,
        overview:MovieData.overview,
        backdrop_path:MovieData.backdrop_path
    }
}

module.exports = parseMovie