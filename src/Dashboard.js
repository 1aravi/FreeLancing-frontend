import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/allprofiles',{
            headers:{
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data))

},[])
if(!localStorage.getItem('token')){
    return <Navigate to='/login' />
}
  return (
    <div>
      <nav className="navbar bg-dark text-white">
        <h1>
          <Link to = '/'><i className="fas fa-code"></i> Freelancer App</Link>
        </h1><br/>
        
          <li><Link to = '/myprofile' className='btn btn-primary'>My Profile</Link></li>
          <li><Link to = '/addproject' className='btn btn-primary'>Add project</Link></li>
          <li><Link to = '/viewprojects' className='btn btn-primary'>View projects</Link></li>
          <li><Link to = '/applyproject' className='btn btn-primary'>Apply project</Link></li>
          <li><Link to = '/viewapplicants' className='btn btn-primary' style={{marginRight:'80px'}}>Who Applied For the Projects</Link></li>
          <Link to = '/login'  className='btn btn-warning' style={{marginRight:'100px'}} onClick={() => localStorage.removeItem('token')} >Logout</Link>
          
          
      </nav>
      <section className='container'>
      
        <h1 className='large text-primary'>Freelancers</h1>
        <p className='lead'><i className="fas fa-code"></i> 
Hey! Connect with Freelancers  based on their skills and profile and your requirements </p>

<div className='profiles'>
    {data.length>=1 ? 
    data.map(profile =>
        <div style={{color:"black", background:"lavender"}}>
                <div>
                    <h2>Name: {profile.fullname}</h2>
                    <p>Email: {profile.email}</p>
                    
                </div>
                <ul>
                   #Skills: {profile.skills.split(',').map(skills=>
                   
                     <li> {profile.skills}</li>
                    )}
                    
                </ul>
                
            </div>

    )
    :null}

        
            
                
</div>


      
      </section>
      <center>
      
      </center>
    </div>
  )
}

export default Dashboard
