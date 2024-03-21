import styled from "styled-components";

export type ContainerSize = 'lg' | 'md' | 'sm'

interface TagContainerProps {
    size: ContainerSize;
    type: string;
}


const containerSizes = {
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
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '12px',
    }
}

export const TagContainer = styled.div<TagContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: ${props => props.type == 'account' ? '100%' : containerSizes[props.size].borderRadius};
    background: ${props => props.theme['gray-250']};
    height:  ${props => containerSizes[props.size].height};
    width:  ${props => containerSizes[props.size].width};
`
