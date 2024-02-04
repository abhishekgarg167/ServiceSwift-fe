import Card from "react-bootstrap/Card";

function ProviderInfoCards({ name, phone, address }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Provider Info</Card.Title>
        <Card.Text>
          Name - {name}
        </Card.Text>
        <Card.Text>
          Phone - {phone}
        </Card.Text>
        <Card.Text>
          Address - {address}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProviderInfoCards;
