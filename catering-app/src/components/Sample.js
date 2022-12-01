import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Sample() {
  return (
    <div>
        <h1>Sample Menus</h1>
        <p>Unsure about what you want to serve at your event? Check out these sample menus for some inspiration!</p>

        <Card className='menu'>
      <Card.Header as="h4">Breakfast Menu</Card.Header>
      <Card.Body>
        <Card.Title>American Classic</Card.Title>
        <Card.Text>
          Two eggs cooked to order, biscuits with gravy, hashbrowns, and two strips of bacon
        </Card.Text>
        <Card.Title>Pancake Breakfast</Card.Title>
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

        <Card className='menu'>
      <Card.Header as="h4">Lunch/Dinner Menu</Card.Header>
      <Card.Body>
      <Card.Title>Classic Steak</Card.Title>
        <Card.Text>
          Steak cooked to order with side of steamed vegetables and garlic mashed potatoes
        </Card.Text>
        <Card.Title>Honey Pecan Chicken</Card.Title>
        <Card.Text>
          Chicken breast glazed with honey and pecans accompanied with potato wedges and side of italian medley of vegetables
        </Card.Text>
        <Card.Title>Pork Tenderloin with Gravy</Card.Title>
        <Card.Text>
          Pork tenderloin covered in gravy (secret recipe), served with bed of rice and broccoli
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
        </Card>

        <hr></hr>

        <Card className='menu'>
      <Card.Header as="h4">Buffet-Style Menu</Card.Header>
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
          Chicken Salad
        </Card.Text>
        <Card.Text>
          Broccoli Salad
        </Card.Text>
        <Card.Text>
          Egg Salad
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

        <Card className='menu'>
      <Card.Header as="h4">By the Order - Order in bulk</Card.Header>
      <Card.Body>
        <Card.Title>Croissant Sandwiches</Card.Title>
        <Card.Text>
          Your choice of meat, with lettuce, tomato, cheese, and mayo
        </Card.Text>
        <Card.Title>Cookout</Card.Title>
        <Card.Text>
          Hamburgers and Hot Dogs served with chips or side of agreed on choice
        </Card.Text>
        <Card.Title>Dessert Tray</Card.Title>
        <Card.Text>
          Assortment of cookies, brownies, and pound cake
        </Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
        </Card>

        <div className='menu-subcontent'>
          <h3>Menus are to serve as an example or base for ideas. Please feel free to contact me directly to discuss creating personal menu for your event!</h3>
        </div>
    </div>
  )
}
