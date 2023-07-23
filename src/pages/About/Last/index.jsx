import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../global/component'
import cover from '../../../assets/images/about-cta-shape.svg'

const Wrapper = styled.div`
    background-image: url(https://mrsool.co/images/about-cta2.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  height:100vh;
  text-align:center;
  position:relative;
  h3{
    font-size: 1.75rem;
    font-weight: 500;
  }
  p{
    font-size: 16px;
  }
  a{
    display:inline-block;
    white-space: normal;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #E10600;
    color: #fff;
    text-decoration:none;
    border-radius:50px;
    margin-top:20px;

  }
  .content{
    width:500px;
    position:absolute;
    top:25%;
    left:33%;
  }
`
const Last = () => {
    return (
        <Wrapper>
            <Container>
                    <div>
                        <img src={cover} alt="" />
                    </div>
                    <div className='content'>
                        <h3>Our Life in MRSOOL</h3>
                        <p>
                            The environment, open space, flexible, fun, around the clock, around the region.
                        </p>
                        <a href="#">Be part of MRSOOL team</a>
                    </div>
            </Container>
        </Wrapper>
    )
}

export default Last