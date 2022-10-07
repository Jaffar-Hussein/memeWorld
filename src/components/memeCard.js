import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'
import '../assets/fav.png';

function MemeCard({ memes, type, updated }) {

  function onAddFav(){
    fetch(`https://meme-pages.herokuapp.com/${type}/${memes.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        is_fav: !memes.is_fav,

      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => updated(updatedItem));
  }


  return (
    <Card style={{ width: '18rem' }} className="MemeCards shadow ">
      <Card.Img variant="top" fluid="md" src={memes.image_url} style={{ height: '50%' }} className="cardHolder" />
      <Card.Body className="cardText">
        <Card.Title className=''>{memes.name}</Card.Title>
        <div className='d-flex justify-content-between'>
          <em className=''>{memes.category}</em>

          <a onClick={onAddFav}>
            <img src={memes.is_fav ? require('../assets/fav.png') : require('../assets/outliine.png')} />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MemeCard