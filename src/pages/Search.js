import Movie from "../components/Movie";

const Search = props => {

    const moviesElems = props.nowShowing.map((movie, idx) => <Movie movie={movie} key={idx}/>)
    return (
       <div>
           <h1>Search for a movie</h1>
           <input type="text" placeholder="Search.." />
           {moviesElems}
       </div>
    )

}

export default Search;