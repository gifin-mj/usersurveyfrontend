import React, { useEffect, useState } from 'react'
import './Edituser.css'
import {useNavigate,useParams} from 'react-router-dom'

import axios from 'axios'
import { baseURL } from '../../constants/constants'

function Edituser() {

  const [userdata,setUserdata]=useState({
    name:"",
    age:0,
    username:""
  })
  const navigate=useNavigate()
  const {id}=useParams()

  useEffect(()=>{
    const getUserById=async()=>{
      const response=await axios.get(`${baseURL}getuserbyid/${id}`)
      const {name,age,username}=response.data.edituser  
      setUserdata({
          name:name,
          age:age,
          username:username
        })
    }
    getUserById()
  },[id])

  const handleChange=(e)=>{
    const {name,value}=e.target
    setUserdata((prevUser)=>{
      return({
        ...prevUser,
        [name]:value
      })
    })
  }
 

  const updateUser=async()=>{
    try{
     await axios.patch(`${baseURL}updateuser/${id}`,{
      userdata
    
     })
     navigate('/')
  }
  catch(err){
    console.log(err);
  }
  }

  return (
    <div className='edituser'>

   
  <form className='userform' onSubmit={(e)=>
    {
      e.preventDefault()
      updateUser()
    }}>
  <h1 className='mt-2'>Edit User</h1>
    <input className='form-control mt-5 mb-3' onChange={handleChange} 
      type="text" value={userdata.name} name="name" placeholder='Enter Name' id="" />
    <input className='form-control mb-3' type="number" onChange={handleChange} 
      value={userdata.age} name="age" id="" placeholder='Enter Age' />
    <input className='form-control mb-3' type="text" onChange={handleChange} 
      value={userdata.username} name="age" id="" placeholder='Enter UserName' />
    <button className='btn btn-outline-warning btn-lg btn-block' type="submit"><h5>Update User</h5></button>
  </form>
  
  </div>

  )
}

export default Edituser