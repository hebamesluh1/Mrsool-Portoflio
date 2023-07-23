import React from 'react'
import { Container } from '../../../global/component'
import { Wrapper } from './style'
const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <div className='hero-about'>
                    <h2>Where It All Began</h2>
                    <p>Our Co-Founders, Nayef and Ayman, met the first time 2010, through a mutual friend, Ayman was working on an Android project, to bring Arabic language support to Android back then, some ideas for multiple products were thrown around, mostly Ayman killing ideas presented by Nayef for technical or execution reasons, by 2013 Ayman started working on an idea for a car marketplace, but after spending about a year on it, he decided to give up, only to find out after a few years that another startup made the same idea and they succeeded.</p>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Hero