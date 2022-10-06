import Card from 'react-bootstrap/Card';
import '../App.css'

function memeCard({ memes }) {
  return (
    <Card style={{ width: '18rem' }} className="MemeCards shadow ">
      <Card.Img variant="top" fluid="md" src={memes.image_url} style={{ height: '50%' }} className="cardHolder" />
      <Card.Body className="cardText">
        <Card.Title className=''>{memes.name}</Card.Title>
        <em className=''>{memes.category}</em>
      </Card.Body>
    </Card>
  );
}

export default memeCard