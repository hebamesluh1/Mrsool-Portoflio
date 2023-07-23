import React from 'react'
import { Container } from '../../../global/component'
import Card from './Card'
import { Wrapper, Cards } from './style'

import img from '../../../assets/images/free-chat.png';
import img2 from '../../../assets/images/flexible-bidding.png'
import img3 from '../../../assets/images/place.png'

const Journey = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <h2>How Do We Do It</h2>
          <p>By building an intuitive product that mimics and facilitates generic service fulfillment, so the simple answer was to provide users with three things.</p></div>
        <Cards>
          <Card img={img} title="Personalized Delivery Experience" description="Control your delivery experiences in real-time through an open chat with your courier" />
          <Card img={img2} title="Flexible Bidding System" description="Service prices are determined beforehand through our bidding system, giving customers the freedom to choose from multiple service providers" />
          <Card img={img3} title="Integrated Map Solution" description="Pick anywhere on the map for your delivery order, and track your order in real-time" />
        </Cards>
        <h3>The new journey </h3>
        <iframe width="80%" height="500px" src="https://www.youtube.com/embed/1OYMh-x2zuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Container>
    </Wrapper>
  )
}

export default Journey