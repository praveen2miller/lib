import React,{useState,useEffect} from 'react'

import './css/about.css'
import user1 from './images/user1.png'

const userId='3';
export default function About() {

  const data =[
    {
      username :"saravanan",
      email:"saravanan@gmail.com",
      phoneNumber:"8610808465"
    }
  ]

  const axios = require('axios');
  const[userdetail,setuserdetail]=useState([]);

  const getdetail = async ()=>{
    try{
      const data = await axios.get("http://localhost:5042/getUser")
      setuserdetail(data.data)
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getdetail();
  },[]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="profile-head">
          <img src={user1} alt="lamp" className="profile-img"/>
        </div>
        {data.map((user) => (

        <div className="user-detail">
          <p><label>Userame: </label><span>{user.username}</span></p>
          <p><label>Email: </label><span>{user.email}</span></p>
          <p><label>Phone Number: </label><span>{user.phoneNumber}</span></p>
        </div>
        ))}
      </div>
        
    </div>
  )
}
