import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({ title, link, imgSrc , showLink=true, desc}) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={imgSrc} style={{ width: '90%', margin: '10px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        { showLink && <Link to={link}>Click</Link>}
      </Card.Body>
    </Card>
  );
}

export default Cards;