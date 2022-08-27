import React from 'react';
import {  useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'

const Myprofile = () => {
    const [data, setData] = useState([null]);
    
    useEffect(()=>{
        axios.get('https://freelancing-webapp.herokuapp.com/myprofile',{
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
      <nav className="navbar bg-dark">
        <h1>
          <Link to = '/'><i className="fas fa-code"></i> Freelancer App</Link>
        </h1>
        <ul>
          <Link to = '/login'  className='btn btn-warning' style={{marginRight:'100px'}} onClick={() => localStorage.removeItem('token')} >Logout</Link>
        
        </ul>
        </nav>
        {data &&
        
        <section className='container' style={{marginTop:'100px'}}>

        <div>
          <center>
                    <h1 className='large'>{data.fullname}</h1>
                    <p className='lead'>{data.email}</p>
                    <p className='lead'>Skills: {data.skills}</p><br/>
                    <Link to ='/dashboard' className='btn btn-primary'>Back to Dashboard</Link>
                    </center>
                    
                </div>
      
            
            

      
      </section>
      }
      
    </div>
  )
}

export default Myprofile
