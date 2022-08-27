import React, {useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const Applyproject = () => {
  const[data, setData] = useState({
    projectname:'',
    projectapplicantname:'',
    email:'',
    skill:''
    

})

const handleChange = e =>{
    setData({...data, [e.target.name]:e.target.value})
}
const handleSubmit = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/applyproject', data)
    .then(
    res => alert(res.data)
    )
}
  return (
    <div>
      
        <center>
        <form style={{background:"indigo"}} onSubmit={handleSubmit} >
        <h1 className='large text-warning'style={{marginTop:'50px'}}>Apply Project</h1><br/>
        <div className='form-group' >
            <input type="text" size="40" onChange={handleChange} name="projectname" placeholder="Project Name" style={{background:"light"}}/>
            </div><br />

            <div className='form-group' >
            <input type="text" size="40" onChange={handleChange} name="projectapplicantname" placeholder="Project Applicant Name" style={{background:"light"}}/>
            </div><br />

            <div className='form-group' >
            <input type="email" size="40" onChange={handleChange} name="email" placeholder="Email" style={{background:"light"}}/>
            </div><br />

            <div className='form-group' >
            <input type="skill" size="40" onChange={handleChange} name="skill" placeholder="Skill" style={{background:"light"}}/>
            </div><br />

            <b><input className='btn btn-danger' style={{marginLeft:"10px", marginBottom:'50px'}} type="submit" value="Apply" /></b><br />
        </form>
        </center><br/>
        
        <center>
        <Link to='/dashboard' className='btn btn-warning' >⬅️Back</Link>
        <Link to = '/login' className='btn btn-warning' style={{marginLeft:"80px"}} onClick={() => localStorage.removeItem('token')}>Logout</Link>
        
        </center>

    </div>
    
  )
}

export default Applyproject