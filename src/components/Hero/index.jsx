import React from 'react'
import { Container } from '../../global/component'
import { Wrapper } from './style'
const Hero = ({title,description,img}) => {
    return (
        <Wrapper style={{backgroundImage:`url(${img})`}}>
            <Container>
                <div className='hero-about'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Hero