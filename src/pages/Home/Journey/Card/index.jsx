import React from 'react'
import { Box } from './style'

const Card = ({img,title,description}) => {
    return (
        <Box>
            <div className='imgs'><img src={img} alt="" /></div>
            <h4>{title}</h4>
            <p>{description}</p>
        </Box>
    )
}

export default Card