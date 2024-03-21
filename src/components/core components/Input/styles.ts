import styled from "styled-components";



export const InputDiv = styled.div`
    display: relative;
    height: 1.875rem;
    padding: 0.5rem;
    margin-top: 1.5rem;
`

export const StyledInput = styled.input`
    position: absolute;
    border-radius: 8px;
    padding: 0.5rem;
    background-color: transparent;
    border: solid 1px ${props => props.theme["gray-250"]};
    height: 1.875rem;
    width: 200px;
    font-size: 0.875rem;
    line-height: 1.4;
    color: ${props => props.theme["gray-500"]};

    &:focus {
        border: solid 1px ${props => props.theme["blue-helper"]};
        color: ${props => props.theme["gray-800"]};
        font-weight: bold;
        outline: none;
        font-size: 0.875rem;
        
    }

    
    

`

export const InputLabel = styled.label`
    position: absolute;
    margin-top: 0.865rem;
    margin-left: 0.5rem;
    
    font-size: 0.875rem;
    line-height: 1.4;
    

    
    transition: 0.2s ease all;

    ${StyledInput}:focus ~ & {
        margin-top: -0.75rem;
        font-size: 0.75rem;
        padding: 0.25rem;
        background-color: ${props=> props.theme.background};
    }
    ${StyledInput}:not(:placeholder-shown) ~ & {
        margin-top: -0.75rem;
        font-size: 0.75rem;
        padding: 0.25rem;
        background-color: ${props=> props.theme.background};
    }
    
    
`