import { useState } from 'react';
import uuidv4 from "uuid-v4";

function MemeForm({ addMeme }) {

    const INITIAL_MEME_STATE = {
        upperText: '',
        bottomText: '',
        imageUrl: ''
    }

    const [memeData, setMemeData] = useState(INITIAL_MEME_STATE);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addMeme({ ...memeData, id: uuidv4() });
       // setMemeData(INITIAL_MEME_STATE);
    }

    const handleChange = (e) => {
        let { name, value } = e.target; 
        setMemeData(memeData => ({
            ...memeData,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="upperText">Upper Text</label>
            <input 
                type="text"
                name="upperText"
                value={memeData.upperText}
                onChange={handleChange}
            />
            <label htmlFor="bottomText">Bottom Text</label>
            <input 
                type="text"
                name="bottomText"
                value={memeData.bottomText}
                onChange={handleChange}
            />
            <label htmlFor="memeImg">Image Url</label>
            <input 
                type="text"
                name="imageUrl"
                value={memeData.imageUrl}
                onChange={handleChange}
            />
            <button>Add Meme</button>
        </form>
    )
}

export default MemeForm;