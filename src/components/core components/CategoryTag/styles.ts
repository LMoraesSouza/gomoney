import styled from "styled-components";
import {Icon} from '../Icon'


export type ContainerSize = 'lg' | 'md' | 'sm'

interface CategoryTagDivProps {
    size: ContainerSize;
    color: string;
}


const sizes = {
    sm: {
        width: '1.25rem',
        height: '1.25rem',
        borderRadius: '4px',
    },
    md: {
        width: '2rem',
        height: '2rem',
        borderRadius: '8px',
    },
    lg: {
        width: '3rem',
        height: '3rem',
        borderRadius: '12px',
    }
}


export const CategoryTagDiv = styled.div<CategoryTagDivProps>`
   
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme[props.color]};
    border-radius: ${props => sizes[props.size].borderRadius};
    border: 1.5px solid ${props => props.size === 'sm' ? props.theme['gray-200'] : props.theme['background']};
    width: ${props => sizes[props.size].width};
    height: ${props => sizes[props.size].height};

`

export const StyledIcon = styled(Icon)`
    color: ${props=> props.theme["gray-650"]};
`
