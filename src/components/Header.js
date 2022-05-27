import Nav from './Nav';

const Header = props => {
    return (
        <header>
            <h1>Movie Tickets</h1>
            <Nav user={props.user} />
        </header>
    )
}

export default Header;