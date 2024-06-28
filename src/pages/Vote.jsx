import React from "react";
import Navbar from "../components/Nav";
import styles from '../styles/Vote.css';
import CharacterVote from "../components/characterVote";


function Vote() {
    return (
        <div className="VotePage">
        <header>
            <Navbar></Navbar>
        </header>
        <body>
            <CharacterVote></CharacterVote>
            <CharacterVote></CharacterVote>
        </body>
        </div>
    )
}

export default Vote;