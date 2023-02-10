import { TextField } from '@mui/material'
import React from 'react'
import { inputText } from '../../../models';


interface Props {
    input: inputText;
}

function Input({ input }: Props) {

    return (
        <TextField fullWidth
            variant='outlined'
            label={input.label}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
        />
    )
}

export default Input