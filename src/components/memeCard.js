import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'
import  '../assets/fav.png';

function MemeCard({ memes }) {
  const [fav, setFav]= useState(false);

  function onAddFav(){
    setFav(fav=> !fav);
    if(fav){

    }
  }

  return (
    <Card style={{ width: '18rem' }} className="MemeCards shadow ">
      <Card.Img variant="top" fluid="md" src={memes.image_url} style={{ height: '50%' }} className="cardHolder" />
      <Card.Body className="cardText">
        <Card.Title className=''>{memes.name}</Card.Title>
       <div className='d-flex justify-content-between'>
       <em className=''>{memes.category}</em>
       
        <a onClick={onAddFav}><img src={ fav ? require('../assets/fav.png') : require('../assets/outliine.png') }/></a>
       </div>
      </Card.Body>
    </Card>
  );
}

export default MemeCard