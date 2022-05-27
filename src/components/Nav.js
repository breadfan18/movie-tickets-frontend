// Built In Components
import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

const Nav = props => {
    return (
        <nav>
            {
                props.user ?
                    <>
                        <img style={{
                            height: '3.125rem',
                            width: '3.125rem',
                            borderRadius: '50%',
                        }}
                            src={props.user.photoURL}
                            alt={props.user.displayName}
                        />
                        <button onClick={logout}>Logout</button>
                    </>
                    : <button onClick={login}>Login</button>
            }
            <Link to='/'>Home</Link>
            <Link to='/theaters'>Theaters</Link>
            <Link to='/search'>Search</Link>
            <Link to='/favorites'>Favorites</Link>
        </nav>
    )
}

export default Nav;