import React from 'react'
import '../styles/signup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [user,setUser] = useState({name:"",email:"",password:""});
  const navigate = useNavigate();
  const handleChange = (e) => {
         const {name,value} = e.target
         setUser({...user,[name]:value})
      }
const register=()=>{
  const{name,email,password} = user
  if(name && email && password){
    axios.post("http://localhost:2000/register",user)
    .then(res=>{
      alert(res.data.message);
      // setUser(res.data.user);
      navigate('/login');
    })
    .catch((err) => console.log(err,'invalid entry'))
  }
  else{
    alert("Please fill all the fields")
  }
 
}

  return (
<div className='wrapper'>

  <form className='Signup-form'>
   
     <div className='wrapper-2'>
          <h2>Create Your Account</h2>

          <div className='form'>
              <input placeholder='Type your Name...' type='text' required  name="name" value={user.name} onChange={handleChange}/>
             <input placeholder='Type your Email...' type='email' required name="email" value={user.email} onChange={handleChange}/>
             <input placeholder='Type Your Password...' type='password' required name="password" value={user.password} onChange={handleChange}/>
             <button onClick={register}>SignUp</button>

              <p style={{textAlign:"end",fontSize:"14px"}}>Already SignUp?{" "}<Link to='Login' style={{color:"orange"}}>Login</Link></p>
          </div>
     </div>
  </form>

</div>
  )
}

export default Signup