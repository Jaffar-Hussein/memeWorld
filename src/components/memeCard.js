import Card from 'react-bootstrap/Card';
import App from '../App';
import '../App.css' 

function memeCard({memes}) {
  return (
    <Card style={{ width: '18rem' }} className="MemeCards">
      <Card.Img variant="top" fluid="md" src={memes.image_url} style={{ height: '50%' }} className="cardHolder" />
      <Card.Body>
        <Card.Title>{memes.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default memeCard;