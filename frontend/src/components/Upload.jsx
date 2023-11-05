import React from 'react'
import '../styles/Upload.css'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ShowPdf from './ShowPdf';


const Upload = () => {
   const navigate = useNavigate();
   const[file,setFile] = useState();

  const  handleLogOut=()=>{
   navigate('/');
  }

  const handleSubmit = async(e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file',file);
      const result = await axios.post('http://localhost:2000/uploadPdf', formData, {headers:{'Content-Type':'multipart/form-data'}});
      console.log(result, 'result');
  }

  return (
        <div className='wrapper'>

        <div className='wrapper-2'>
           <h3 style={{fontSize:"26px"}}>Drop Your <span style={{color: "gold",fontSize:"36px"}}>PDF </span>Here</h3>
            <div className='form'>
               <input type="file" accept="application/pdf" required onChange={(e) => setFile(e.target.files[0])}/>
            
               <button onClick={handleSubmit}>Upload PDF</button>
            </div>

        </div>

        <ShowPdf />

        <div className="button-2" onClick={handleLogOut}>LogOut</div>
    </div>
        


  )
}

export default Upload