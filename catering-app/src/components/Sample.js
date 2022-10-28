import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Sample() {
  return (
    <div>
        <h1>Sample Menus</h1>
        <p>Unsure about what you want to serve at your event? Check out these sample menus for some inspiration!</p>

        <Card>
      <Card.Header as="h5">Breakfast Menu</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        </Card>

        <hr></hr>

        <Card>
      <Card.Header as="h5">Lunch/Dinner Menu</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        </Card>

        <hr></hr>

        <Card>
      <Card.Header as="h5">Buffet-Style Menu</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        </Card>

        <hr></hr>

        <Card>
      <Card.Header as="h5">By the Order</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        </Card>
    </div>
  )
}
