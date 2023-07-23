import React from 'react'

import { Logo, Menu, Button, Wrapper,FullWrapped } from './style'

import logo from '../../../assets/images/Mrsool-Logo-v2.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <FullWrapped>
    <Wrapper>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Menu>
          <ul>
            <li className='active'><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/business">For Business</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </Menu>
        <Button>
          <button>Become a courier 📦</button>
        </Button>
    </Wrapper>
    </FullWrapped>
  )
}

export default Header