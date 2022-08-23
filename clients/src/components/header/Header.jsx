import React from 'react'
import './header.css'
import memories from '../../images/memories.png'

const Header = () => {
  return (
    <div className='header'>
        <h1>Memories</h1>
        <img src={memories} alt="memories" />
    </div>
  )
}

export default Header