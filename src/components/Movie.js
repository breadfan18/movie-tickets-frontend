const Movie = props => {
    const posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`;

    const loadingMovie = () => {
        return <div>
            <p>Loading Movie...</p>
        </div>

    }

    const loaded = () => {
        return <div>
            <h3>{props.movie.title}</h3>
            <img src={posterUrl} alt="" style={{ height: '150px' }} />
        </div>
    }

    return (
        <div>
            {props.movie && posterUrl ? loaded() : loadingMovie()}
        </div>
    )
}

export default Movie;