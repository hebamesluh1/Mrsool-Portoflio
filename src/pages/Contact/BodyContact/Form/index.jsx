import React from 'react'
import Input from './Input'
import img from '../../../../assets/images/contact-form.svg';
import {FormStyle,Btns} from './style'
const Form = () => {
  return (
    <FormStyle>
      <div className='group'>
        <div className='inputs'>
          <Input label="Your Name" type="text" placeholder="Your Full name" />
          <Input label="Email" type="email" placeholder="example@gmail.com" />
          <Input label="phone" type="tel" placeholder="+90000000" />
        </div>
        <div className='imgSection'>
          <img src={img} alt="" />
        </div>
      </div>
      <Input label="Message title" type="text" placeholder="" />
      <Input label="Message" textarea />

      <Btns>
        <button className='cancel-btn'>Cancel</button>
        <button className='send-btn'>Send</button>
      </Btns>

    </FormStyle>
  )
}

export default Form