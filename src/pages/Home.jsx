import React from "react";
import Navbar from "../components/Nav";
import Character from "../components/character";


function Home() {
    return (
        <div>
            <header class="Nav">
                <Navbar></Navbar>
            </header>
            <body>
                <Character></Character>
            </body>
        </div>
    );
  }

export default Home;