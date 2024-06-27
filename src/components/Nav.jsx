import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import styles from '../styles/Nav.css'

function Navbar() {
    return (
        <div class='navbar'>
            <ul id="nav-list">
                <li><a href="">Home</a></li>
                <li><a href="">Vote</a></li>
                <li><a href="">Ranking</a></li>
                <li><a href="">Add Character</a></li>
            </ul>
        </div>
    );
};

export default Navbar;