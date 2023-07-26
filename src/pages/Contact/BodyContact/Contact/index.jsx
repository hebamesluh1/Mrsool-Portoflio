import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Style } from './style';

const Contact = () => {
    return (
        <Style>
            <h3>Our Offices</h3>
            <div className='group'>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" className='icons' />
                <div>
                    <h5>Saudi Arabia Offices</h5>
                    <p>Abi Bakar As Siddiq Rd - HQ
                        Sekkah Offices
                        Riyadh.</p>
                </div>
            </div>

            <div className='group'>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" className='icons' />
                <div>
                    <h5>Egypt Offices</h5>
                    <p>El-Shaikh El-Shaarawy St,Cairo, Egypt</p>
                </div>
            </div>

            <div className="find-us">
                <h2>Find US</h2>
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" className="icons" />
                <FontAwesomeIcon icon="fa-brands fa-square-twitter" className="icons" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" className="icons" />
                <FontAwesomeIcon icon="fa-brands fa-square-youtube" className="icons" />
                <FontAwesomeIcon icon="fa-brands fa-tiktok" className="icons" />
            </div>
        </Style>
    )
}

export default Contact