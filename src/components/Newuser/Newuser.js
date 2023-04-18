import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Newuser.css'
import { baseURL } from '../../constants/constants';


function Newuser() {
  
  const navigate = useNavigate();
  const [userdata,setUserdata]=useState({
    name:"",
    age:0,
    username:""
  })
  
  
  const addUser=async()=>{
      console.log(userdata);
      try {
      await axios.post(`${baseURL}newuser`, {
        userdata
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange=(e)=>{
    const {name,value}=e.target
    setUserdata((prevUser)=>{
      return(
        { ...prevUser,
          [name]:value
        }
      )
    })

  }
  return (

    

    <div className='newuser'>

     
    <form className='userform' 
    onSubmit={(e)=>{
      e.preventDefault()
      addUser()
    }}>
      <h1 className='mt-2'>New User</h1>
        <input className='form-control mt-5 mb-3' 
          onChange={handleChange} 
          type="text" name="name" placeholder='Enter Name' id="" />
        <input className='form-control mb-3' type="number"
          onChange={handleChange}
          name="age" id="" placeholder='Enter Age' />
        <input className='form-control mb-3' type="text" 
          onChange={handleChange}
          name="username" id="" placeholder='Enter UserName' />
        <button className='btn btn-outline-warning btn-lg btn-block' type="submit"><h5>Add New User</h5></button>
    </form>
    
    </div>

  )
}

export default Newuser