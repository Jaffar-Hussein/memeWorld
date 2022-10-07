import Cards from '../components/cards';
import React, { useEffect, useState } from "react";
import Navbar from './navbar';
import '../App.css'
function Fav() {
    const [memes, setMemes] = useState([]);
    const [funny, setFunnyMemes] = useState([]);
    const [popular, setPopular] = useState([]);


    useEffect(() => {
        fetch("https://meme-pages.herokuapp.com/memes?is_fav=true")
            .then(r => r.json())
            .then(data => setMemes(data))
    },
        []);
    useEffect(() => {
        fetch("https://meme-pages.herokuapp.com/popular?is_fav=true")
            .then(r => r.json())
            .then(data => setPopular(data))
    }, []);
    useEffect(() => {
        fetch("https://meme-pages.herokuapp.com/funny?is_fav=true")
            .then(r => r.json())
            .then(data => setFunnyMemes(data))
    },
        []);
    return (
        <>
            <Navbar />
            <p className="h5  my-2 pop mx-5">Favourites </p>

            <p className="cardText mx-5">  Funny</p>

            <Cards memes={funny} type="favourites"

            />
            <p className="cardText mx-5"> Popular</p>

            <Cards memes={popular} type="popular"
            />
            <p className="cardText mx-5"> Other memes</p>
            <Cards memes={memes} type="favourites" />
        </>
    );

}
export default Fav;