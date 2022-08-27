import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Login = () => {
    const[auth, setAuth] = useState(false)
    const[data, setData] = useState({
        email:'',
        password:'',
    });
    const handleChange = e =>{
        setData({...data, [e.target.name]:e.target.value })
    }
    const handleSubmit = e =>{
        e.preventDefault();
       axios.post('https://freelancing-webapp.herokuapp.com/login',data).then(
        res => {localStorage.setItem('token', res.data.token);setAuth(true)}
       )
    }
    if(auth){
        return <Navigate to ='/dashboard' />
    }
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
      <section className='container'>
      
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'><i className="fas fa-code"></i> 
          Hey! Sign into your account
        </p>
        <form className='form' autoComplete='off' onSubmit={handleSubmit}>
            <div className='form-group'>
                <input type="email"
                placeholder='Email Address'
                name="email"
                required
                onChange={handleChange}
                />
            </div><br/>

            <div className='form-group' >
                <input type="password"
                placeholder='Password'
                name="password"
                onChange={handleChange}
                
                />
            </div><br/>
            <input type="submit" className='btn btn-primary' value="Login" />
        </form>
        <div className='buttons'>
        <p className='my-1'>Don't have an Account? <Link to ='/register'>Sign Up</Link></p>

        </div>

      
      </section>
    </div>
  )
}

export default Login

