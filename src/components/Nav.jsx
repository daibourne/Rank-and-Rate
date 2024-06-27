import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Nav.css'

function Navbar() {
    return (
        <div class='navbar'>
            <ul id="nav-list">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Vote'}>Vote</Link></li>
                <li><Link to={'/Ranking'}>Ranking</Link></li>
                <li><Link to={'/AddCharacter'}>Add Character</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;