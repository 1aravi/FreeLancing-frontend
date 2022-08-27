import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
  return (
    <div>
 <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href = '/'>Freelancer App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href ="/login">Login</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      
      
      
      <section className='landing'>
      <Container style={{marginTop: '100px'}}>
      
        <h1 className='x-large'>Freelancer App</h1>
        <p className='lead'>
        Freelancing WebApp For Add Projects, View Projects, and Apply for Projects
        </p>
        </Container>
        <center>
        <div className='buttons'>
        <Link to = '/register' className='btn btn-primary' style={{marginRight: '50px'}}>Sign Up</Link>
        <Link to = '/login' className='btn btn-primary'>Login</Link>

        </div>
        </center>

      
      </section>
      
    </div>
  )
}

export default Home;
