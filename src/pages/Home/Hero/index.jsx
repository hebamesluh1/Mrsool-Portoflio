import React from 'react'

import {Container1,ContainerVideo ,Content} from './style'
import video from '../../../assets/video/Mrsool.mp4'
import appStore from '../../../assets/images/hero-appstore.png'
import gallery from '../../../assets/images/hero-appgallery.png'
import play from '../../../assets/images/hero-playstore.png'
import { Container } from '../../../global/component'

const Hero = () => {
  return (
    <Container1>
    <ContainerVideo>
        <div className='overlay'></div>
        <video autoPlay muted loop >
            <source src={video} type='video/mp4'/>
        </video>
    </ContainerVideo>
    <Container>
    <Content>
        <div><h1>Anything from anywhere in your city</h1></div>
        <div className='stores'>
            <a href="#">
                <img src={appStore} alt="" />
            </a>
            <a href="#">
                <img src={gallery} alt="" />
            </a>
            <a href="#">
                <img src={play} alt="" />
            </a>
        </div>
    </Content>
    </Container>
    </Container1>
  )
}

export default Hero