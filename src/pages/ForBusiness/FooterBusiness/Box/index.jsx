import React from 'react'
import {Card} from './style'
const Box = ({img,title,description}) => {
    return (
        <Card>
            <img src={img} alt="" />
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Card>
    )
}

export default Box