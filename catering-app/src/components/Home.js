import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Home() {
  return (
    <div>
        <div className='introduction' >
            <div>
                <h1>Gourmet Cooking</h1>
                <p>ipsum</p>
            </div>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://imgur.com/Y0Gd510.png" />
      <Card.Body>
        <Card.Title>Chef Juan Venegas</Card.Title>
        <Card.Text>
          With over 25 years of experience serving food to the people in and around Atlanta, I hope to have a plate of mine reach a table near you!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>A la Carte Catering</ListGroup.Item>
        <ListGroup.Item>Meal Delivery to you</ListGroup.Item>
        <ListGroup.Item>Pricing is negotiable</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="mailto:juanjove31@yahoo.com">Send me an email to find out more!</Card.Link>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}
