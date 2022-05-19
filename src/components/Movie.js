const Movie = props => {
    const posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`
    return (
        <div>
            <h3>{props.movie.title}</h3>
            <img src={posterUrl} alt="" style={{height: '150px'}} />
        </div>
    )
}

export default Movie;