import React from "react";

function CharacterVote () {
    return (
        <div className="character">
            <div className="characterName">
                <h2>Character Name</h2>
            </div>
            <div className="characterPicture">
                <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
            <div className="characterShow">
                <p>One Piece</p>
            </div>
            <div className="characterBio">
                <p>Bio of selected character</p>
            </div>
            <div className="VoteButton">
                <button>This Character</button>
            </div>
        </div>
    )
};

export default CharacterVote;