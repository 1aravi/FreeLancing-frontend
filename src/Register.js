import React, {useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Register = () => {
  const[data, setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''

})

const handleChange = e =>{
    setData({...data, [e.target.name]:e.target.value})
}
const handleSubmit = e =>{
    e.preventDefault();
    axios.post(`https://freelancing-webapp.herokuapp.com/register`, data)
    .then(
    res => alert(res.data)
    )
}
  return (
    <div>
      <Navbar bg="primary" variant="dark">
      <Container>
          <Navbar.Brand href = '/'>Freelancer App</Navbar.Brand>
          <Nav className="me-auto">
            <Link to = '/register' className='btn btn-primary'>Register</Link>
            <Link to = '/login' className='btn btn-primary'>Login</Link>
            
          </Nav>
        </Container>
      </Navbar>
      <section className='container'>
      
        <h1 className='large text-primary'>Register</h1>
        <p className='lead'><i className="fas fa-code"></i> 
          Hey! Signup to create an account
        </p>
        <form className='form' autoComplete='off' onSubmit={handleSubmit}>
            
            <div className='form-group'>
            <input type="text" size="30" onChange={handleChange} name="fullname" placeholder="Full Name" style={{background:"light"}}/>
            </div><br />
            <div className='form-group'>
            <input type="email" size="30" onChange={handleChange} name="email" placeholder="Email" style={{background:"light"}}/>
            </div><br />
            <div className='form-group'>
            <input type="skills" size="30" onChange={handleChange} name="skills" placeholder="skills" style={{background:"light"}}/>
            </div><br />
            <div className='form-group'>
            <input type="password" size="30" onChange={handleChange} name="password" placeholder="Password" style={{background:"light"}}/>
            </div><br />
            <div className='form-group'>
            <input type="password" size="30" onChange={handleChange} name="confirmpassword" placeholder="Confirm Password" style={{background:"light"}}/>
            </div><br />
            <b><input type="submit" value="Register" className='btn btn-primary' /></b><br />
        </form>
        

        <p className='my-1'>Alredy have an account? <Link to ='/login'>Login</Link></p>
        

      
</section>
</div>
  )
}

export default Register

