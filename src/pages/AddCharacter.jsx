import React from "react";
import Navbar from "../components/Nav";
import styles from '../styles/AddCharacter.css';

export function AddCharacter() {
    return (
        <div>
        <header>
            <Navbar></Navbar>
        </header>
        <body>
            <h1>This is the Add Character Page</h1>
        </body>
        </div>
    )
}

export default AddCharacter;