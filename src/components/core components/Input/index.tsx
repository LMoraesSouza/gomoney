import {  InputHTMLAttributes } from 'react'
import {InputDiv, InputLabel, StyledInput} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}


export function Input({label, ...rest}: InputProps) {



    return(
        <InputDiv>
            <StyledInput placeholder='' {...rest}/>
            <InputLabel >{label}</InputLabel>

        </InputDiv>
    )
}