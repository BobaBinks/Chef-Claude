import React from 'react'
import chefClaudeLogo from '../assets/chef-claude-icon.png'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img className='logo-img' src={chefClaudeLogo}/>
        <span className='logo-text'>Chef Claude</span>
      </div>
    </header>
  )
}

export default Header
