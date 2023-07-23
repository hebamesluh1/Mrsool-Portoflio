import React from 'react'
import img from '../../../assets/images/on-demand.svg';
import styled from 'styled-components';


const MenuStyle = styled.div`
display:flex;
gap:20px;
h6{
    font-size: 1rem;
    font-weight:700;
}
`
const Menu = ({img,desc,title}) => {
    return (
        <MenuStyle>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h6>{title}</h6>
                <p>
                   {desc}
                </p>
            </div>
        </MenuStyle>
    )
}

export default Menu