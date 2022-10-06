import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemeCard from './memeCard';
import '../App.css'

function Cards({memes, type, updated}) {
  return (
    <Container fluid="md" className='mx-auto'>
      {
        memes.length!==0 ?
        <Row className="justify-content-center mx-auto mt-4">
        {memes.map(meme => {
            return <Col className='mx-auto mb-3' key={meme.id}><MemeCard className="MemeCards" updated={updated} memes={meme} type={type} /></Col>
        })}
      </Row>
      : <p>No data to populate at the moment</p>
      }
      
    </Container>
  );
}

export default Cards;