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
        <Card.Title>American Classic</Card.Title>
        <Card.Text>
          Two eggs cooked to order, biscuits with gravy, hashbrowns, and two strips of bacon
        </Card.Text>
        <Card.Title>Sweet Tooth Breakfast</Card.Title>
        <Card.Text>
          Two pancakes served with butter and maple syrup. Served alongside two scrambled eggs and two strips of bacon
        </Card.Text>
        <Card.Title>The Omelette</Card.Title>
        <Card.Text>
           Cooked with your choice of ingredients or everything listed, mushrooms, green/red peppers, cheese, bacon, onions, and/or spinach 
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
        </Card>

        <hr></hr>

        <Card>
      <Card.Header as="h5">Lunch/Dinner Menu</Card.Header>
      <Card.Body>
      <Card.Title>Classic Steak</Card.Title>
        <Card.Text>
          Steak cooked to order with side of steamed vegetables and garlic mashed potatoes
        </Card.Text>
        <Card.Title>Honey Pecan Chicken</Card.Title>
        <Card.Text>
          Chicken breast glazed with honey and pecans accompanied with potato wedges and side of italian medley of vegetables
        </Card.Text>
        <Card.Title>Pork with Gravy</Card.Title>
        <Card.Text>
          Pork covered in gravy (secret recipe), served with bed of rice and broccoli
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
        </Card>

        <hr></hr>

        <Card>
      <Card.Header as="h5">Buffet-Style Menu</Card.Header>
      <Card.Body>
        <Card.Title>Main Entree</Card.Title>
        <Card.Text>
          Meatloaf with red sauce
        </Card.Text>
        <Card.Text>
          Fried Catfish
        </Card.Text>
        <Card.Title>Sides</Card.Title>
        <Card.Text>
          Potato Wedges 
        </Card.Text>
        <Card.Text>
          Wild rice with vegetables
        </Card.Text>
        <Card.Title>Additional Sides</Card.Title>
        <Card.Text>
          Chicken Salad, Broccoli Salad, or Egg Salad
        </Card.Text>
        <Card.Text>
          Fruit Medley
        </Card.Text>
        <Card.Title>Dessert</Card.Title>
        <Card.Text>
          Choice of chocolate chip cookies or chocolate brownies
        </Card.Text>
 
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
        </Card>

        <hr></hr>

        <Card>
      <Card.Header as="h5">By the Order</Card.Header>
      <Card.Body>
        <Card.Title>Classic Steak</Card.Title>
        <Card.Text>
          Steak cooked to order with side of steamed vegetables and garlic mashed potatoes
        </Card.Text>
        <Card.Title>Honey Pecan Chicken</Card.Title>
        <Card.Text>
          Chicken breast glazed with honey and pecans accompanied with potato wedges and side of italian medley of vegetables
        </Card.Text>
        <Card.Title>Honey Pecan Chicken</Card.Title>
        <Card.Text>
          Chicken breast glazed with honey and pecans accompanied with potato wedges and side of italian medley of vegetables
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
        </Card>
    </div>
  )
}
