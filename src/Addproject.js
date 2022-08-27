import React, {useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const Addproject = () => {
  const[data, setData] = useState({
    projectname:'',
    postrequirements:''
    

})

const handleChange = e =>{
    setData({...data, [e.target.name]:e.target.value})
}
const handleSubmit = e =>{
    e.preventDefault();
    axios.post('https://freelancing-webapp.herokuapp.com/addproject', data)
    .then(
    res => alert(res.data)
    )
}
  return (
    <div>
      
        <center>
        
        <form className='form' autoComplete='off' style={{background:"purple"}} onSubmit={handleSubmit} >
            <h1 className='large text-primary'style={{marginTop:'50px'}}>Add Project</h1><br/>

            <div className='form-group' >
            <input  className='form-group' type="text" size="30" onChange={handleChange} name="projectname" placeholder="Project Name" style={{background:"light"}}/>
            </div><br />
            <div>
            <input type="text" size="30" onChange={handleChange} name="postrequirements" placeholder="Postrequirements" style={{background:"light"}}/>
            </div><br />
            
            <b><input type="submit" value="Add" className='btn btn-primary' style={{marginBottom:'50px'}}></input></b><br />
        </form>
        </center><br/>
        <center>
        <Link to='/dashboard' className='btn btn-warning' >⬅️Back</Link>
        <Link to = '/login' className='btn btn-warning' style={{marginLeft:"80px"}} onClick={() => localStorage.removeItem('token')}>Logout</Link>
        
        </center>
    </div>
    
  )
}

export default Addproject
