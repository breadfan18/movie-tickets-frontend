import Movie from "../components/Movie";
import * as ReactBootStrap from 'react-bootstrap';

const Search = props => {

    // Need to figure out how to load movies by region

    const loading = () => {
        return (
            <>
                <p>Loading movies...</p>
                <ReactBootStrap.Spinner animation="border" />
            </>
        )
    }

    const loaded = () => {
        const moviesElems = props.nowShowing.map((movie, idx) => <Movie movie={movie} key={idx} />)
        return (
            <>{moviesElems}</>
        )
    }
    return (
        <div>
            <h1>Search for a movie</h1>
            <input type="text" placeholder="Search.." />
            {props.nowShowing ? loaded() : loading()}
        </div>
    )
}

export default Search;