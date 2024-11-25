import { Link, NavLink } from 'react-router-dom'

function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    )
}

export default MainMenu