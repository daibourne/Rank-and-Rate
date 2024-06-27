import React from "react";
import Navbar from "../components/Nav";
import Character from "../components/character";
import styles from '../styles/Home.css';



function Home() {
    return (
        <div>
            <header class="Nav">
                <Navbar></Navbar>
            </header>
            <body>
            <div className="introduction">
                <h2>Welcome to the Anime/Video game character rank</h2>
                <p>This browers allows users to create and rank different Anime or Video game characters, and see who is the favorite amoung the community. Go to the voting page to vote for your favorites. The Ranking page allows us to see where everyone is currently at the time. Add Character page allows you add your own favorite character to how well they stack against the rest. The Character shown is currently the top ranked individual.</p>
            </div>
            <div className="top-character">
                <Character></Character>
            </div>
            </body>
        </div>
    );
  }

export default Home;