import {useState,useEffect,React} from 'react'
import axios from 'axios'
import {Link}from 'react-router-dom'
import { baseURL } from '../../constants/constants'

function Alluser() {

  const [users,setUsers]=useState([])

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers=async()=>{
   let response=await axios.get(`${baseURL}`)
      setUsers(response.data)
  }
  const deleteUser=async(id)=>{
    try{
      await axios.delete(`${baseURL}deleteuser/${id}`)
      getUsers()
    }
    catch(err){

    }
  }

  return (
    <div className='alluser'>
    <h1 className='mt-5'>Users</h1>
    <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Age</th>
      <th scope="col">UserName</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {
    users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.username}</td>
        <td> 
          <Link
            to={`edit/${user._id}`}>
            <i className="bi bi-pencil-fill"></i>
          </Link>
            &emsp;
          
           <i style={{cursor:'pointer'}} onClick={()=>{deleteUser(user._id)}} className="bi bi-trash-fill"></i>
          
        </td>
      </tr>
    )})
    
  }
  </tbody>
</table>
    
    
    </div>
  )
}

export default Alluser