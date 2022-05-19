// Built In Components
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav>
            {/* <Link to='/'>Login</Link> */}
            {/* <Link to='/'>Sign Out</Link> */}
            <Link to='/'>Home</Link>
            <Link to='/theaters'>Theaters</Link>
            <Link to='/search'>Search</Link>
            <Link to='/favorites'>Favorites</Link>
        </nav>
    )
}

export default Nav;