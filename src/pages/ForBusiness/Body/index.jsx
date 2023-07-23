import React from 'react'
import {WrapperBox} from './style'
const Body = ({imgLast,title,description,number,img}) => {
    return (
        <WrapperBox>
            <div className='text-section'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='background-section' style={{backgroundImage:`url(${img})` , order: imgLast ? 2 : -1 }} >
                <p>#{number}</p>
            </div>
        </WrapperBox>
    )
}

export default Body