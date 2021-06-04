import './App.css';
import MemeForm from './MemeForm';
import Meme from './Meme';
import './styles.css';
import { useSelector, useDispatch } from "react-redux";

function App() {

  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch(); 

  function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme});
  }

  function deleteMeme(id) {
    dispatch({ type: "DELETE_MEME", id});
  }

  const memeComps = memes.map(m => (
    <Meme 
      key={m.id}
      upperText={m.upperText}
      bottomText={m.bottomText}
      imageUrl={m.imageUrl}
      deleteMeme={() => deleteMeme(m.id)}
    />
  ))

  return (
    <div className="App">
      <div className="Meme-Form">
        <h3>Make A New Meme!</h3>
        <MemeForm addMeme={addMeme}/>
      </div>
      {memeComps}
    </div>
  );
}

export default App;
