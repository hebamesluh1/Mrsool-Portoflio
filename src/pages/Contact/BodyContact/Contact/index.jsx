import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Style } from '../style';

const Contact = () => {
    return (
        <Style>
            <h3>Our Offices</h3>
            <div>
                <div><FontAwesomeIcon icon="fa-solid fa-location-dot" /></div>
                <div>
                    <h5>Saudi Arabia Offices</h5>
                    <p>Abi Bakar As Siddiq Rd - HQ
                        Sekkah Offices
                        Riyadh.</p>
                </div>
            </div>

            <div>
                <div><FontAwesomeIcon icon="fa-solid fa-location-dot" /></div>
                <div>
                    <h5>Egypt Offices</h5>
                    <p>El-Shaikh El-Shaarawy St,Cairo, Egypt</p>
                </div>
            </div>
        </Style>
    )
}

export default Contact