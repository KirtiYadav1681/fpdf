import React from "react";
import Nav from "./components/Nav";
import Upload from "./components/Upload";
import Signup from "./components/Signup";
import Login from "./components/Login";

import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css'
import { useState } from "react";


function App() {
  const [user,setLoginUser]=useState({})

  return (
    <Router>

   <Nav/>

    <Routes>

      <Route path="/Upload" element={user && user._id ? <Upload/>:<Login setLoginUser={setLoginUser} /> }/>

        <Route path="/" element={<Signup/>} />

      <Route path="/Login" element={<Login setLoginUser={setLoginUser} />}/>
  

    </Routes>
   </Router>
   
  );
}

export default App;
