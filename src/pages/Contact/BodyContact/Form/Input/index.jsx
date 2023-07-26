import React from 'react'
import { Box, Inputt, Label } from './style'
const Input = ({ label, type, placeholder, textarea }) => {
    return (
        <Box>
            <Label htmlFor="">{label}</Label>
            {textarea ? <textarea rows="5"></textarea> : <Inputt type={type} placeholder={placeholder} />}
        </Box>
    )
}

export default Input