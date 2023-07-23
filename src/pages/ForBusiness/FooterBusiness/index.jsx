import React from 'react'
import { Wrapper, CardWrapped } from './style'
import Box from './Box'

import img1 from '../../../assets/images/business-support.svg';
import img2 from '../../../assets/images/business-requirements.svg';
import img3 from '../../../assets/images/business-cancelation.svg';

const FooterBusiness = () => {
    return (
        <Wrapper>
            <CardWrapped>
                <Box img={img1} title="What about support?" description="You will have a dedicated Account Manager from Mrsool who you can reach at anytime and through any channel you prefer; like Email, Phone, Whatsapp etc." />
                <Box img={img3} title="What about cancelation?" description="We would not be happy to see you leave, but we understand that sometimes things don’t work out. You can request to cancel your account at anytime, after which we will start the process of closing your account and any pending issues associated with it if any." />
                <Box img={img2} title="What are the requirements?" description="You are only required to provide an Android smart phone/tablet in each branch. A PC or a Laptop will work too. Then you are good to go" />
            </CardWrapped>
            <button>Sign in Mrsool for Business NOW</button>
        </Wrapper>
    )
}

export default FooterBusiness