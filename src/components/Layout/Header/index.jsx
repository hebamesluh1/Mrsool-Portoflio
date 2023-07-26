import React, { useState, useEffect } from 'react';
import { Logo, Menu, Button, Wrapper, FullWrapped } from './style';
import logo from '../../../assets/images/Mrsool-Logo-v2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollBackground, setScrollBackground] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FullWrapped className={scrollBackground ? 'scroll-background' : ''}>
      <Wrapper>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Menu>
          <ul>
            <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
              <Link to="/">Home</Link>
            </li>
            <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
              <Link to="/about">About</Link>
            </li>
            <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
              <Link to="/business">For Business</Link>
            </li>
            <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>
              <Link to="/contact">Get in Touch</Link>
            </li>
          </ul>
        </Menu>
        <Button>
          <button>Become a courier 📦</button>
        </Button>
      </Wrapper>
    </FullWrapped>
  );
};

export default Header;
