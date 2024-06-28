import React, { useState } from "react";
import Navbar from "../components/Nav";
import styles from '../styles/AddCharacter.css';

function CharacterForm() {
    const [formData, setFormData] = useState({
        name: '',
        imageURL: '',
        show: '',
        bio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="webPage">

        <header>
            <Navbar></Navbar>
        </header>
        <form onSubmit={handleSubmit}>
            <div>
                <p>This page allows user to create and add they're own character into the ranking. Fill in the require information (all is required) and hit the submission below to start voting for them.</p>
                <label htmlFor="name">Character Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="imageUrl">Character URL Image:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="show">Character Show:</label>
                <input
                    type="text"
                    id="show"
                    name="show"
                    value={formData.show}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bio">Character Bio:</label>
                <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default CharacterForm;