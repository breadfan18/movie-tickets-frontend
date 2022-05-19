import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = props => {
    return (
        <header>
            <h1>Movie Tickets</h1>
            <>
                <Link to='/'>Log Out</Link>
                <Nav />
            </>
        </header>
    )
}

export default Header;