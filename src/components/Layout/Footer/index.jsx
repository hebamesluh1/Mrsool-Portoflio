import React from 'react'
import { FullWrapped, Wrapper, List,Down } from './style'
import { Link } from 'react-router-dom'

import appstore from '../../../assets/images/footer-appstore.png'
import playstore from '../../../assets/images/footer-playstore.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <FullWrapped>
      <Wrapper>
        <List>
          <h6>Site Menu</h6>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/business">For Business</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </List>
        <List>
          <h6>Contacts</h6>
          <ul>
            <li><FontAwesomeIcon icon="fa-solid fa-location-arrow" className="custom-icon" />Abi Bakar As Siddiq Rd, Riyadh, Saudi Arabia</li>
            <li><a href="mailto:inquiries@mrsool.co"><FontAwesomeIcon icon="fa-solid fa-envelope" className="custom-icon" /> inquiries@mrsool.co</a></li>
          </ul>
        </List>
        <List>
          <h6>Follow us</h6>
          <ul>
            <li className='social'>
              <div><FontAwesomeIcon icon="fa-brands fa-square-facebook" className="custom-icon" /></div>
              <div><FontAwesomeIcon icon="fa-brands fa-square-twitter" className="custom-icon" /></div>
              <div><FontAwesomeIcon icon="fa-brands fa-instagram" className="custom-icon" /></div>
              <div><FontAwesomeIcon icon="fa-brands fa-square-youtube" className="custom-icon" /></div>
              <div><FontAwesomeIcon icon="fa-brands fa-tiktok" className="custom-icon" /></div>
            </li>
            <li><img src={appstore} alt="app store" /></li>
            <li><img src={playstore} alt="play store" /></li>
          </ul>
        </List>
      </Wrapper>
      <Down>
        <Wrapper>
        <div>
        © 2023 MRSOOL Inc.
        </div>
        <div>
        Privacy Policy & Terms of Use
        </div>
        </Wrapper>
      </Down>
    </FullWrapped>
  )
}

export default Footer