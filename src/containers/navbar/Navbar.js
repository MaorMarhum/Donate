import React from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const Menu = () => {
  return (
    <>
      <p><a href='#about'>About Us</a></p>
      <p><a href='#how'>How It Works</a></p>
      <p><a href='#goal'>Our Goals</a></p>
      <p><a href='#contact'>Join Us</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <div className='donate__navbar'>
      <div className='donate__navbar-img'>
        <img src={logo} alt="logo" />
      </div>
      <div className="donate__navbar-links">
        <Menu />
      </div>
      <div className="donate__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="donate__navbar-menu">
        {toggleMenu ?
          <AiOutlineClose size={27} onClick={() => setToggleMenu(false)} /> :
          <FiMenu size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&
          (<div className='donate__navbar-menu_container shadow-drop-2-top'>
            <div className="donate__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="donate__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Navbar;
