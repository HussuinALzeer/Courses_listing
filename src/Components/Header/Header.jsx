import React from 'react'
import './header.scss'
import Logo from '../../resources/logo.png'

const Header = () => {
  return (
    <div className='header-con df jcc'>
        <div className="logo"> 
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Header