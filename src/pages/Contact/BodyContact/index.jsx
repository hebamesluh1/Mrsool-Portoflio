import React from 'react'
import Form from './Form'
import { Container } from './../../../global/component';
import { Wrapper, Style } from './style'
import Contact from './Contact';
const BodyContact = () => {
  return (
    <Wrapper>
      <Container>
        <Style>
          <div>
            <Contact />
          </div>
          <div>
            <Form />
          </div>
        </Style>
      </Container>
    </Wrapper>
  )
}

export default BodyContact