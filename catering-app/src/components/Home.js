import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Home() {
  return (
    <div>
        <div className='introduction' >
            <div className='intro-left'>
                <h1>JV Catering Services</h1>
                <Card id='phrase-card' body>Fresh Food, Friendly Catering</Card>
                <ul className='intro-list'>
                    <li>Pricing is negotiable with a starting minimum of $10.99/person</li>
                    <li>Max delivery distance of 50 miles from edges of Duluth, GA</li>
                    <li>Available for on-site services as well</li>
                    <li>Menu is freeform, please reach out to discuss how you want to design yours</li>
                    <li><b>Most importantly, please let us know of any dietary restrictions or allergies you expect</b></li>
                </ul>
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
        <ListGroup.Item>Call me: <a href="tel:404-583-1053">404-583-1053</a></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="mailto:juanjove31@yahoo.com">Send me an email to find out more!</Card.Link>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}
