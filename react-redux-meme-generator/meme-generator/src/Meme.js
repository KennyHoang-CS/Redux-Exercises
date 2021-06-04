import React from 'react';
import './styles.css';

function Meme({ upperText, bottomText, imageUrl, deleteMeme, id }) {
    
    function handleDeleteMeme() {
        deleteMeme(id);
    }
    
    return (
        <div className="Meme">
            <div className="container">
                <span className="top-text">{upperText}</span>
                <img src={imageUrl} alt="A Meme Image" />
                <span className="bottom-text">{bottomText}</span>
            </div>
            <button id="meme_deleteBtn" onClick={handleDeleteMeme}>
                DELETE
            </button>
        </div>
    )
}

export default Meme; 