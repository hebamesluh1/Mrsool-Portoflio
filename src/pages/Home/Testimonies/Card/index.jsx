import React from 'react'
import { Box } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({text,title}) => {
  return (
    <Box>
        <div className="header">
        <FontAwesomeIcon icon="fa-solid fa-quote-right" className='qoutes'/>
        </div>
        <div className="body">
            {text}
        </div>
        <div className="footer">
            {title}
            <img src="https://mrsool.co/images/ratings.png" alt="" />
        </div>
    </Box>
  )
}

export default Card