import styled from "styled-components";

interface CheckboxProps{
    checked: boolean;
}

export const BoxContainer = styled.div<CheckboxProps>`
    width: 0.88rem;
    height: 0.88rem;
    border: 1px solid ${props =>props.theme["gray-350"]};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0.19rem;
    background: ${props => props.checked ? props.theme["blue-base"] : props.theme["gray-200"]};   
`
export const CheckboxDiv = styled.div<CheckboxProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;

    p{
        font-size: 0.875rem;
        line-height: 1.4;
        color: ${props => props.theme["gray-500"]};

    }

    svg {
        color: ${props => props.theme["blue-base"]};
    }

    &:hover{
        background: ${props => props.theme["gray-200"]};

        div{
            border: 1px solid ${props => props.checked ? props.theme["gray-500"] : props.theme["gray-400"]};
            background: ${props => props.checked ? props.theme["blue-base"] : props.theme["gray-250"]};
        }
        
        p{
            color: ${props => props.theme["gray-600"]};  
        }
    }
`





