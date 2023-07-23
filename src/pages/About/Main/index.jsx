import React from 'react'
import { Container } from '../../../global/component'
import { Wrapper } from './style'
import img from '../../../assets/images/about-thumbnail.png';
import aboutJ from '../../../assets/images/about-journey.svg';
import img2 from '../../../assets/images/about-mrsool.svg';
import img3 from '../../../assets/images/about-serve.svg';
import ondemand from '../../../assets/images/on-demand.svg';
import listing from '../../../assets/images/listing.svg';
import resturant from '../../../assets/images/restaurant.svg';
import Menu from './Menu';
const Main = () => {
    return (
        <Wrapper>
            <Container>
                <h2>A lesson was learned!</h2>
                <h3>Never give up on your idea 💡</h3>
                <div className='content'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='paragraph'>
                        <p>
                            One day, Nayef was telling Ayman a story about the hassles he had to go through when he had to drive a long way to get something done, then he said, why don't we have a solution for this? What if you have a brother in every corner of the city? This time Ayman couldn't turn down that idea. <span>It was as if a bright light bulb went on their heads! Mrsool was born at that very moment</span>
                        </p>
                        <p>During the development, Ayman was working full time at a hospital and he just had his firstborn son, and a few hours before an important presentation he was supposed to deliver to the top management of the hospital, his wife called him, telling him that they ran out of milk for the baby, he had to leave the office at the downtown, drive all the way to get milk for the baby and back to the office.</p>
                        <p>At that exact moment, he realized that if he had Mrsool, he would have used the app to get out of that bad situation! And 5 months after that, the app was live!</p>
                    </div>
                </div>
                <div className='Journey'>
                    <h5>That’s when the journey from an idea to a fastest growing startups in the region started and is still ongoing</h5>
                    <div className='aboutJourney'>
                        <img src={aboutJ} alt="" />
                    </div>
                </div>
                <div className="about">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='contentOfAbout'>
                        <h5>What does "Mrsool" mean?</h5>
                        <p>
                            MRSOOL comes from the Arabic root Rasl which means “to send”, variations of the word from the root could mean “messenger”, “delegate” or “envoy”. As the word implies, you are delegating someone on your behalf to do something for you, be it to purchase and deliver dinner 🍲, buy medicine from the pharmacy, or even fetch your spare keys 🔑 on the unfortunate event of locking yourself out of your car 🚘!
                        </p>
                        <p>
                            Established in 2015, Mrsool grew rapidly over the past few years, by the time it closed series A in early 2019, the on-demand delivery platform reported GMV exceeding 1 billion Riyals, serving over 4 million users across all the cities of the Saudi kingdom.
                        </p>
                        <p>
                            Mrsool platform pioneered the on-demand service fulfillment model in the region, by establishing a massive customer-to-customer network through a generic chat-based ordering experience, allowing users to be creative and unconstrained in describing the service needed, and giving the couriers the option to bid with their price they see fit, ensuring a fully scalable and self-regulating model.
                        </p>
                    </div>
                </div>
                <div className="about">
                    <div className='contentOfAbout'>
                        <h5>Who can use Mrsool now?</h5>
                        <p>Besides customers looking for on-demand help and couriers looking for an extra flexible source of income, Mrsool offers a number of business solutions built on the platform's on-demand model, such as:</p>
                        <div>
                            <Menu img={ondemand} desc="Get instant access to thousands of on-demand couriers in your city to offer on-demand delivery for your eCommerce customers within hours" title="On-Demand Logistics" />
                            <Menu img={listing} desc="Promote your business for millions of users around you, one-click away from converting to loyal customers!" title="In-App Listing" />
                            <Menu img={resturant} desc="Manage inbound eCommerce orders from Mrsool seamlessly, as you start preparing the order while the courier is on the way, guaranteeing an express service to your customers they've never experienced before!" title="Restaurant Ordering Solution" />
                        </div>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Main