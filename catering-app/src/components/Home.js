import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Home() {
  return (
    <div>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Chef Juan Venegas</Card.Title>
        <Card.Text>
          With over 25 years of experience serving food to the people in and around Atlanta, I hope to have a plate of mine reach a table near you!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Weddings, Events, Gatherings</ListGroup.Item>
        <ListGroup.Item>Build your ideal menu</ListGroup.Item>
        <ListGroup.Item>Pricing is negotiable</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="mailto:venegas.a.juan37@gmail.com">Send me an email to find out more!</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}
