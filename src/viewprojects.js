import React from 'react';
import {  useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';

import axios from 'axios'

const Viewprojects = () => {
   
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/viewprojects',{
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
      

<nav className="navbar bg-primary">
        <h1>
          <Link to = '/' className='danger' style={{color:'black'}}>Freelancer App</Link>
          <Link to ='/dashboard' className='btn btn-warning' style={{marginLeft:'1000px', marginBottom:'20px'}}>⬅️Back to Dashboard</Link>
        <Link to = '/login' className='btn btn-warning' style={{marginLeft:'1280px', marginBottom:'20px'}} onClick={() => localStorage.removeItem('token')}>Logout</Link>
        
        </h1>
        

      </nav>
      <section className='container'>
      <center>
        <h1 className='large text-primary' style={{marginTop:'10px'}}>List of Projects</h1></center>
        <p className='lead'><i className="fas fa-code"></i> 
See the projects and those postrequirments        </p>

<center>
<div className='profiles'>
    {data.length>=1 ? 
    data.map(profile =>
        <div className='profile bg-indigo' style={{background:"pink"}}>
                <div>
                    <h2><span style={{color:"gray"}}>✅Project Name: </span> {profile.projectname}</h2>
                    <h4><span style={{color:"gray"}}>🔸Postrequirements/Skills Needed: </span>  {profile.postrequirements}</h4><br/>
                    <Link to = '/applyproject' className='btn btn-primary' style={{marginBottom:'20px'}}>Apply project</Link>
                    
                    
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

export default Viewprojects