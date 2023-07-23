import React from 'react'
import Card from './Card'

import { Container } from '../../../global/component'
import { Wrapper } from './style'

const Testimonies = () => {
  return (
    <Wrapper>
      <Container>
        <h2>User Testimonies</h2>
        <div className='cards'>
          <Card text="It is a fantastic service. It serves you wherever you are in a decent and quick way. It saves your time and respond to you quickly. I appreciate your work and wish this service lasts forever." title="Hadir"/>
          <Card text="'MRSOOL' a simple way to order anything you want from thousands of places in your neighborhood shops, grocery, stores, restaurants, and favorites delivered straight to your door, and more. the best delivery apps to use. 👍" title="Signssteel"/>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Testimonies