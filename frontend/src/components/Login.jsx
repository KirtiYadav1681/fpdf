import React from 'react'
import '../styles/Login.css'
import { Link} from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
const Login = ({setLoginUser}) => {
  const navigate = useNavigate();

  const [user,setUser] = useState({email:"",password:""})

  const handleChange = (e) => {
         const {name,value} = e.target
         console.log(e.target)
         setUser({...user,[name]:value})
      }


      const login = () => {
        axios.post("http://localhost:2000/login", user)
          .then(res => {
            alert(res.data.message);
            setLoginUser(res.data.user);
            navigate('/Upload');
          })
          .catch(err => {
            // Handle any error that might occur during the request.
            console.error(err);
          });
      }
      
  
  return (
    <div className='wrapper'>

    <div className='login-form'>
   
    
<div className='wrapper-2'>
     <h2>Welcome Back</h2>

     <div className='form'>
    <input placeholder='Type your Email...' type='email' required name="email" value={user.email} onChange={handleChange} />
    <input placeholder='Type Your Password...' type='password' required  name="password" value={user.password} onChange={handleChange} />
    <button onClick={login}>Login</button>

    <p style={{textAlign:"end",fontSize:"14px"}}>New User?{" "}<Link to='/' style={{color:"orange"}}>SignUp</Link></p>
    </div>
</div>
    </div>

    </div>
  )
}

export default Login