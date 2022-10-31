import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">JVCS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sample">Sample Menus</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNav