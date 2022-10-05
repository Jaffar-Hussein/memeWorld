import React, {useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cards from './components/cards';
import Popular from './components/popular';
import Funny from './components/funny';

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
     <Popular />
     <Funny />
     <Cards memes={memes}/>
     
     
    </div>
  );
}

export default App;
