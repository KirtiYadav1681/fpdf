import React from 'react'
import '../styles/Nav.css'
import {AiOutlineFilePdf} from 'react-icons/ai'
const Nav = () => {
  return (
    <div className='nav'>
    <AiOutlineFilePdf fontSize={32} color='gold'/>
    <h2>Chat With Pdf</h2>
 </div>
  )
}

export default Nav