import React, {useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cards from './components/cards';

const URL = "http://localhost:8002/memes";

function App() {
  const [memes,setMemes] = useState([]);
  useEffect(()=>{
    fetch(URL)
    .then(r => r.json())
    .then(data => setMemes(data))
  },[]);
  
  return (
    <div className="App">
     <Navbar />
     <Cards memes={memes}/>
     
    </div>
  );
}

export default App;
