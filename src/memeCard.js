import Card from 'react-bootstrap/Card';

function memeCard({memes}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" fluid="md" src={memes.image_url} style={{ height: '50%' }} />
      <Card.Body>
        <Card.Title>{memes.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default memeCard;