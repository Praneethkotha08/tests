import { Link } from "react-router-dom";

function Nav()
{
    return(
        <nav class="navbar">
            <Link to="#" class="navbar-brand">Praneeth</Link>
            <div class="nav">
                <Link to="/" class="nav-link">Home</Link>
                <Link to="about" class="nav-link">About</Link>
                <Link to="contact" class="nav-link">Contact</Link>
            </div>
        </nav>
    )
}
export default Nav;
