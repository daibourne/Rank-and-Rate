import React from "react";
import Navbar from "../components/Nav";
import Character from "../components/character";
import styles from '../styles/Ranking.css';



export function Ranking() {
    return (
        <div>
        <header>
            <Navbar></Navbar>
        </header>
        <body>
            <h1>This is the Ranking Page</h1>
            <Character></Character>
        </body>
        </div>
    )
}

export default Ranking;