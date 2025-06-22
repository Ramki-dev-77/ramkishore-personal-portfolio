import React from "react";
import '../styles/Navbar.css';
import {
    Link,
} from "react-router-dom";
function Navbar(){
    return(
        <>
            <nav>
                <ul className="navbar-ul">
                    <li>
                        <Link to="#" className="nav-links">Ramki</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-links">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="nav-links">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;