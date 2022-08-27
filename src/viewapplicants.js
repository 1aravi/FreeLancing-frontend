import React from 'react';
import {  useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';

import axios from 'axios'

const Viewapplicants = () => {
    
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get('https://freelancing-webapp.herokuapp.com/viewapplicant',{
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
      

<nav className="navbar bg-success">
        <h1>
          <Link to = '/'><i className="fas fa-code"></i> Freelancer App</Link>
          <Link to ='/dashboard' className='btn btn-warning' style={{marginLeft:'1000px', marginBottom:'20px'}}>⬅️Back to Dashboard</Link>
        <Link to = '/login' className='btn btn-warning' style={{marginLeft:'1280px', marginBottom:'20px'}} onClick={() => localStorage.removeItem('token')}>Logout</Link>
        </h1>
        

      </nav>
      <section className='container'>
      <center>
        <h1 className='large text-primary' style={{marginTop:'10px'}}>Applicants</h1>
        </center>
        <p className='lead'><i className="fas fa-code"></i> 
See the people who are applied for the projects      </p>

<center>
<div className='profiles'>
    {data.length>=1 ? 
    data.map(profile =>
        <div  style={{background:"purple"}}>
                <div>
                    <h2 style={{color:"cyan"}}><span style={{color:"pink"}}>✅Project Name: </span>{profile.projectname}</h2>
                    <p><h3 style={{color:"cyan"}}><span style={{color:"yellow"}}>👨🏻‍💼Who applied for this project:  </span>{profile.projectapplicantname}</h3></p>
                    
                    
                </div>
                <ul>
                    
                </ul>
                
            </div>

    )
    :null}

        
 
                
</div>

</center>  
      
      </section>
      
    </div>
    
  )
}

export default Viewapplicants