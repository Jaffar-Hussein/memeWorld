import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cards from './components/cards';
import { Routes, Route, useNavigate } from "react-router-dom";
import Popular from './components/popular';
import Funny from './components/funny';
import UploadMeme from './components/uploadMeme';
import Categories from './components/categories';
import Fav from './components/fav';

const URL = "http://localhost:8002/memes";

function App() {
  let navigate = useNavigate();

  const [memes, setMemes] = useState([]);
  const [records, setrecords] = useState({
    name: "",
    category: "Nonsensical",
    image_url: "",

  });


  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => setMemes(data))
  }, []);
  function handleChange(e) {
    const value = e.target.value;
    setrecords({
      ...records,
      [e.target.name]: value
    });


  }



  function handleSubmit(e) {
    e.preventDefault();

    const formData = { name: records.name, category: records.category, image_url: records.image_url, is_fav: "false" };

    fetch("http://localhost:8002/memes", {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then((newItem) => setMemes([...memes, newItem]));
      navigate('/');
  }


  function updated(items) {
    const updatedItems = memes.map((meme) => {
      if (items.id === meme.id) {
        return items;
      }
      else {
        return meme;
      }
    });
    setMemes(updatedItems);
  }
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<><Navbar /> ,<Popular type="popular"
        //  onAddFav={onUpdate}
        /> ,<Funny type="funny"
          // onAddFav={onUpdate}
          />
          ,
          <Cards memes={memes} key={memes.id} type="memes"
            updated={updated}
          />

        </>}
        />
        <Route path="/upload" element={<UploadMeme handleSubmit={handleSubmit} handleChange={handleChange} />} />
        <Route path='/favourites' element={<Fav />} />
        <Route path={`/:category`} element={<Categories updated={updated} />} />
      </Routes>


    </div>
  );

}

export default App;
